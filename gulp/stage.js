/* eslint-env node */
import { promisify } from 'util'
import { exec as execCb } from 'child_process'
import path from 'path'

import awspublish from 'gulp-awspublish'
import chalk from 'chalk'
import concurrentStream from 'concurrent-transform'
import gulp from 'gulp'
import logger from 'gulplog'
import rename from 'gulp-rename'
import webpack from 'webpack'
import gulpFilter from 'gulp-filter'

import { throwError } from './utils'
import git from './git'

const execAsync = promisify(execCb)

export function validateForStaging(conf) {
    // 0. No skipping tests for public builds
    if (conf.isPublic() && conf.skipTests()) {
        throwError('Cannot skip tests for a public build')
    }

    // 1. All builds must have a clean git status.
    //    Why? If I checkout master at sha 1235, make a change, but don't commit that change,
    //         when I stage my local dpxyz-js to S3, the sha will be 1235, but the code will
    //         not reflect the sha.
    if (git.currentStatus().length !== 0) {
        const msg = [
            '\n*****************',
            chalk.bold('Please git commit or stash your changes.\n'),
            "To avoid collisions, it's critical that deploys to S3 buckets",
            'have clean git status. Otherwise an entry file sha like 1235 might',
            'be overwritten by many developers, each time with different code.',
            '*****************',
        ].join('\n')

        logger.info(chalk.red(msg))
        throwError('`git status` must be clean to stage to S3')
    }

    // 2. Must be building a SHA that is available on origin/master (i.e. it's been reviewed and accepted)
    // NOTE: we are disabling this check until we are back to a continuous deployment strategy.
    //     if (!git.isShaOnOriginMaster(conf.gitSha(), 'origin/master')) {
    //         const path = conf.fullPublicPath()
    //
    //         throwError(`Code must be on origin/master to stage to ${path}`)
    //     }

    return conf
}

function basicTests() {
    logger.info('Running tests.')
    return execAsync('yarn test')
}

export function build(conf) {
    logger.info('Building assets.')

    const webpackConfig = conf.generateWebpackConfig()

    const webpackCompiler = webpack(webpackConfig)

    return new Promise((resolve, reject) => {
        webpackCompiler.run((err, stats) => {
            if (err) {
                return reject(err)
            }
            const jsonStats = stats.toJson()

            if (jsonStats.errors.length > 0) {
                jsonStats.errors.map(errs => logger.error(chalk.red(errs)))
                const webpackError = new Error(
                    chalk.red('Encountered webpack errors, see above'),
                )

                return reject(webpackError)
            }
            return resolve(conf)
        })
    })
}

// This is the old staging function that stores all dpxyz-JS files in the '/1' folder the bucket
// This is being replaced with the new stage function below
function oldStage(conf) {
    logger.info('Staging assets in /1 folder')

    // All promises required for this staging task
    // to complete.
    const all = []

    const publisher = awspublish.create({
        params: {
            ACL: 'public-read',
            Bucket: conf.s3Bucket(),
        },
        region: conf.s3Region(),
    })

    let s3upload = gulp.src('./build/**/*')
    const MAX_CONCURRENT_FILES = 10

    // If this is a public build then we strip out sourcemaps from
    // uploaded files (and upload to Sentry instead).
    if (conf.isPublic()) {
        s3upload = s3upload.pipe(
            gulpFilter(['*', '!*.map'], { matchBase: true }),
        )
    }

    s3upload = s3upload
        .pipe(
            rename(s3path => {
                s3path.dirname = path.join(conf.s3Directory(), s3path.dirname)
            }),
        )
        .pipe(awspublish.gzip())
        .pipe(
            concurrentStream(
                publisher.publish(conf.s3Headers()),
                MAX_CONCURRENT_FILES,
            ),
        )
        .pipe(awspublish.reporter())

    all.push(s3upload)

    return Promise.all(all)
}

// This is the new staging function that stores all dpxyz-JS files in the '/1/{git-sha}' folder the bucket
// This is the new stage function that will be used going forward
function stage(conf) {
    logger.info('Staging assets')

    // All promises required for this staging task
    // to complete.
    const all = []

    const publisher = awspublish.create({
        params: {
            ACL: 'public-read',
            Bucket: conf.s3Bucket(),
        },
        region: conf.s3Region(),
    })

    let s3upload = gulp.src('./build/**/*')
    const MAX_CONCURRENT_FILES = 10

    // If this is a public build then we strip out sourcemaps from
    // uploaded files (and upload to Sentry instead).
    if (conf.isPublic()) {
        s3upload = s3upload.pipe(
            gulpFilter(['*', '!*.map'], { matchBase: true }),
        )
    }

    s3upload = s3upload
        .pipe(
            rename(s3path => {
                s3path.dirname = path.join(
                    conf.s3Directory(),
                    conf.gitSha(),
                    s3path.dirname,
                )
            }),
        )
        .pipe(awspublish.gzip())
        .pipe(
            concurrentStream(
                publisher.publish(conf.s3Headers()),
                MAX_CONCURRENT_FILES,
            ),
        )
        .pipe(awspublish.reporter())

    all.push(s3upload)

    return Promise.all(all)
}

export async function buildAndStage(conf) {
    validateForStaging(conf)

    const msg = `${chalk.underline('Staging:')} ${chalk.bold(
        conf.releaseId(),
    )} to ${chalk.bold(conf.fullPublicPath())}`

    logger.info(chalk.green(msg))

    if (!conf.skipTests()) {
        await basicTests()
    } else {
        logger.info(chalk.yellow('WARNING Skipping tests.'))
    }

    await build(conf)
    // Run both stage functions while we transition to the new format
    await Promise.all([stage(conf), oldStage(conf)])
}
