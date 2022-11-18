/* eslint-env node */
const path = require('path')
const fs = require('fs')

const argv = require('minimist')(process.argv.slice(2))

const generateConfig = require('./webpack/generateConfig')

const RELEASE_ID = 'localhost'
const host = 'localhost'
const DEFAULT_PORT = 3001
const port = argv.port || DEFAULT_PORT
const https = argv.https || false

const configOptions = {
    // If you want to run against the index.html file and a different API host, change this line.
    // TODO: support alternatives via CLI options
    apiRootUrl: 'https://localhost/',
    BABEL_ENV: 'development',
    generateAnalysis: false,
    minifyCss: false,
    NODE_ENV: 'development',
    publicPath: `//${host}:${port}/`,
    uglifyJs: false,
    useFullSourceMaps: false,
    devServer: {
        allowedHosts: 'all',
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
            progress: true,
        },
        compress: true,
        devMiddleware: {
            index: 'index.html',
        },
        historyApiFallback: {
            index: '/',
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        host, // !important, for websocket address on hot load
        hot: true,
        port,
        server: {
            type: https ? 'https' : 'http',
            options: {
                // ca: fs.readFileSync(
                //     path.join(__dirname, 'webpack/ssl/csr.pem'),
                // ),
                // cert: fs.readFileSync(
                //     path.join(__dirname, 'webpack/ssl/cert.pem'),
                // ),
                // key: fs.readFileSync(
                //     path.join(__dirname, 'webpack/ssl/key.pem'),
                // ),
            },
        },
        // https: true, // uncomment to enable https locally, run yarn start-ssl, or pass --https to the CLI
        // open: true,
        // openPage: [
        //     '',
        //     'http://qa-dpxyz.dpxyzlabs.com/app/overrides?dpxyz_JS_RELEASE_ID=localhost&dpxyz_JS_CDN_PATH=http%3A%2F%2Flocalhost%3A3001%2F',
        // ],
    },
    stableIndexFile: true,
    enableSentryUploads: false,
    useNamedModules: true,
}

module.exports = generateConfig(RELEASE_ID, configOptions)
