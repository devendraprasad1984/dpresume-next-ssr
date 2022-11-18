import urljoin from 'url-join'

import generateConfig from '../webpack/generateConfig'

import { throwError } from './utils'
import git from './git'

const SIXTY = 60
const HOURS_IN_DAY = 24
const FIVE = 5
const FIVE_MINUTES_IN_SECONDS = FIVE * SIXTY
const TWO_MONTHS_IN_SECONDS = SIXTY * SIXTY * HOURS_IN_DAY * SIXTY

const DEV_CDN_DEV = {
    cdnRoot: 'https://dpxyz-dev-cdn-dev.s3-us-west-2.amazonaws.com',
    isPublic: false,
    s3Bucket: 'dpxyz-dev-cdn-dev',
    s3Directory: 'cdn/flat',
    s3Headers: {
        // small private cache for dev
        CacheControl: `private, max-age=${FIVE_MINUTES_IN_SECONDS}`,
    },
    s3Region: 'us-west-1',
}

const DEV_CDN_DIFF = {
    // Used for staging all Phabricator diffs to dpxyz-js
    cdnRoot: 'https://dpxyz-dev-cdn-dev.s3-us-west-2.amazonaws.com',
    isPublic: false,
    s3Bucket: 'dpxyz-dev-cdn-dev',
    s3Directory: 'cdn/diff',
    s3Headers: {
        // small private cache for dev
        CacheControl: `private, max-age=${FIVE_MINUTES_IN_SECONDS}`,
    },
    s3Region: 'us-west-1',
}

const PROD_CDN = {
    cdnRoot: 'https://dpxyzcdn.com',
    isPublic: true,
    s3Bucket: 'dpxyz-prod-cdn',
    s3Directory: '1', // Version the deploy style by path in case we need to make changes down the line
    s3Headers: {
        // 48 hour ttl (we usually deploy more than once a day,
        // but this provides buffer for weekends)
        CacheControl: `public, max-age=${TWO_MONTHS_IN_SECONDS}`,
    },
    s3Region: 'us-west-2',
}

const JP_CDN_DEV = {
    cdnRoot: 'https://dpxyz-jp-cdn-dev.s3-ap-northeast-1.amazonaws.com',
    isPublic: false,
    s3Bucket: 'dpxyz-jp-cdn-dev',
    s3Directory: 'cdn/flat',
    s3Headers: {
        // small private cache for dev
        CacheControl: `private, max-age=${FIVE_MINUTES_IN_SECONDS}`,
    },
    s3Region: 'ap-northeast-1',
}

const JP_CDN_STG = {
    cdnRoot: 'https://dpxyz-jp-cdn-staging.s3-ap-northeast-1.amazonaws.com',
    isPublic: true,
    s3Bucket: 'dpxyz-jp-cdn-staging',
    s3Directory: '1', // Version the deploy style by path in case we need to make changes down the line
    s3Headers: {
        // 48 hour ttl (we usually deploy more than once a day,
        // but this provides buffer for weekends)
        CacheControl: `public, max-age=${TWO_MONTHS_IN_SECONDS}`,
    },
    s3Region: 'ap-northeast-1',
}

const JP_CDN_PROD = {
    cdnRoot: 'https://dpxyz-jp-cdn.s3-ap-northeast-1.amazonaws.com',
    isPublic: true,
    s3Bucket: 'dpxyz-jp-cdn',
    s3Directory: '1', // Version the deploy style by path in case we need to make changes down the line
    s3Headers: {
        // 48 hour ttl (we usually deploy more than once a day,
        // but this provides buffer for weekends)
        CacheControl: `public, max-age=${TWO_MONTHS_IN_SECONDS}`,
    },
    s3Region: 'ap-northeast-1',
}

const DESTINATION_CONFIGS = {
    'dev-cdn-dev': DEV_CDN_DEV,
    'dev-cdn-diff': DEV_CDN_DIFF,
    'prod-cdn': PROD_CDN,
    'jp-cdn-dev': JP_CDN_DEV,
    'jp-cdn-staging': JP_CDN_STG,
    'jp-cdn': JP_CDN_PROD,
}

export class BuildConfig {
    constructor({
        destinationId = 'dev-cdn-dev',
        gitSha = git.currentSha(),
        skipTests = false,
        ebConfig = { region: 'us-west-2' },
    }) {
        if (!gitSha) {
            throwError("Could't get a SHA for this build")
        }

        if (typeof destinationId === 'undefined') {
            throwError('--destination is required')
        }

        if (
            !Object.prototype.hasOwnProperty.call(
                DESTINATION_CONFIGS,
                destinationId,
            )
        ) {
            const destinations = Object.keys(DESTINATION_CONFIGS).join(', ')

            throwError(`--destination must be one of ${destinations}`)
        }

        this._skipTests = skipTests
        this._gitSha = gitSha
        this._destination = DESTINATION_CONFIGS[destinationId]
        this._ebConfig = ebConfig
    }

    skipTests() {
        return this._skipTests
    }

    s3Directory() {
        return this._destination.s3Directory
    }

    fullPublicPath() {
        return `/${this.s3Directory()}`
    }

    manifestKey() {
        // The manifest file name here must match the output from
        // generate config
        return urljoin(this.s3Directory(), `${this.releaseId()}.manifest.json`)
    }

    manifestUrl() {
        return urljoin(this._destination.cdnRoot, this.manifestKey())
    }

    s3Headers() {
        return this._destination.s3Headers
    }

    s3Bucket() {
        return this._destination.s3Bucket
    }

    s3Region() {
        return this._destination.s3Region
    }

    isPublic() {
        return Boolean(this._destination.isPublic)
    }

    gitSha() {
        return this._gitSha
    }

    releaseId() {
        return this.gitSha()
    }

    ebConfig() {
        return this._ebConfig
    }

    generateWebpackConfig() {
        const publicPath = `${this.fullPublicPath()}/`
        const options = {
            BABEL_ENV: 'production',
            minifyCss: true,
            NODE_ENV: 'production',
            publicPath,
            uglifyJs: true,
            useFullSourceMaps: true,
            useHotReload: false,
            useNamedModules: false,
            generateAnalysis: !this.isPublic(),
            enableSentryUploads: false,
            sentryUrlPrefix: this.fullPublicPath(),
        }
        const releaseId = this.releaseId()

        return generateConfig(releaseId, options)
    }
}
