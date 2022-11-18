// Config used for mocha-webpack integration tests
const config = require('./generateConfig')('test', {
    BABEL_ENV: 'production',
    initializeApps: false,
    minifyCss: false,
    NODE_ENV: 'production',
    publicPath: 'https://our-fake-domain.com/',
    uglifyJs: false,
    useFullSourceMaps: false,
    useHotReload: false,
    useNamedModules: true,
    useTestExternals: true,
    enableSentryUploads: false,
})

config.target = 'node'
module.exports = config
