/* eslint-env node */
import axios from 'axios'
import bluebird from 'bluebird'
import chalk from 'chalk'
import logger from 'gulplog'
import AWS from 'aws-sdk'

import { throwError, leftJustify } from './utils'

const TWO_SECONDS = 2000

export async function getReleaseId(targetEnv, conf) {
    const ssm = new AWS.SSM(conf.ebConfig())

    const result = await ssm
        .getParameter({
            Name: `/platformGateway/${targetEnv}/dpxyz_JS_RELEASE_ID`,
        })
        .promise()

    return result.Parameter.Value
}

export function verifyBuildIsStaged(conf) {
    // Check that the build we're trying to deploy is actually staged on S3
    const path = conf.manifestUrl()

    return bluebird
        .any([bluebird.delay(TWO_SECONDS).then(() => axios.get(path))])
        .catch(() => {
            throwError(
                `Couldn't find manifest file ${path}. Please run "yarn stage:dev" (for all devs) or "yarn stage:prod" (for prod) first.`,
            )
        })
}

export async function setParameterStoreReleaseId(
    targetEnv,
    targetProfile,
    conf,
) {
    let currentdpxyzJsReleaseId = await getReleaseId(targetEnv, conf)
    const nextdpxyzJsReleaseId = conf.releaseId()

    if (currentdpxyzJsReleaseId === nextdpxyzJsReleaseId) {
        logger.info(
            `Parameter Store already set to ${currentdpxyzJsReleaseId}. Nothing to do here.`,
        )
        return conf
    }
    await verifyBuildIsStaged(conf)
    const releaseMessage = leftJustify(`
        Current ${chalk.green(
            `${targetEnv} dpxyz_JS_RELEASE_ID`,
        )} is: ${chalk.magenta(`${currentdpxyzJsReleaseId}`)}
        Promoting ${chalk.green(
            `${targetEnv} dpxyz_JS_RELEASE_ID`,
        )} to: ${chalk.magenta(`${nextdpxyzJsReleaseId}`)}
            `)

    logger.info(releaseMessage)

    const ssm = new AWS.SSM(conf.ebConfig())
    const releaseIdKey = `/platformGateway/${targetEnv}/dpxyz_JS_RELEASE_ID`

    logger.info(
        `Updating Parameter Store: ${chalk.green(
            releaseIdKey,
        )} to: ${chalk.magenta(`${nextdpxyzJsReleaseId}`)}`,
    )
    await ssm
        .putParameter({
            Name: releaseIdKey,
            Value: nextdpxyzJsReleaseId,
            Overwrite: true,
        })
        .promise()

    return conf
}
