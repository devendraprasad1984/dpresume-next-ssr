'use strict' // eslint-disable-line

/* eslint-env node */

process.traceDeprecation = true

const path = require('path')
const os = require('os')

const assign = require('lodash/assign')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const SentryWebpackPlugin = require('@sentry/webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const ManifestPlugin = require('./ManifestPlugin')

const rootDir = path.resolve(__dirname, '..')
const srcDir = path.resolve(rootDir, 'src')
const outputDir = 'build'
const outputPath = path.resolve(rootDir, outputDir)
const babelRcPath = path.resolve(rootDir, 'babel.config.js')
const antdOverridesPath = path.resolve(srcDir, 'styles/antd-overrides.js')

const babelRc = require(babelRcPath)
const antdOverrides = require(antdOverridesPath)

// We need "modules: false" in order to get tree shaking, but our gulpfile uses
// the .babelrc config file and needs "modules: true"
babelRc.presets = babelRc.presets.map(preset => {
    if (Array.isArray(preset) && preset[0] === '@babel/preset-env') {
        return ['@babel/preset-env', assign(preset[1], { modules: false })]
    }
    return preset
})

function requireOption(value, msg) {
    if (typeof value === 'undefined') {
        throw new Error(msg)
    }
}

function defaultOption(value, defaultValue) {
    if (typeof value === 'undefined') {
        return defaultValue
    }
    return value
}

// Wrapped in iife to prevent linter warning
const stylesDir = path.resolve(rootDir, 'src/styles')
const postCssPlugins = (() => [
    require('postcss-import')({
        path: [stylesDir],
    }),
    require('postcss-define-property'),
    require('postcss-color-hexa'),
    require('postcss-mixins'),
    require('postcss-custom-media'),
    require('postcss-cssnext')({
        features: { autoprefixer: { remove: false } },
    }),
])()

/**
 * Generate the common webpack config based on environment
 * @return {object}         The config object to be used by webpack
 */
module.exports = function generateConfig(releaseId, webpackOptions) {
    const {
        NODE_ENV,
        publicPath,
        uglifyJs,
        minifyCss,
        BABEL_ENV,
        useNamedModules,
        enableSentryUploads,
        sentryUrlPrefix,
        useFullSourceMaps,
        disableSourceMaps = false,
        generateAnalysis = true,
        generateIndexHtml = true,
        useThreads = true,
        stableIndexFile = false,
        apiRootUrl,
        devServer,
    } = webpackOptions
    // prettier-ignore
    const useTestExternals = defaultOption(
        webpackOptions.useTestExternals,
        false
    )
    const initializeApps = defaultOption(webpackOptions.initializeApps, true)
    const isProduction = NODE_ENV === 'production'
    const MAX_CORES = os.cpus().length

    requireOption(releaseId, 'releaseId is required')
    requireOption(NODE_ENV, 'NODE_ENV is required')
    requireOption(publicPath, 'publicPath is required')
    // prettier-ignore
    requireOption(
        publicPath.match(/\/$/),
        'publicPath must end in trailing slash'
    )
    requireOption(uglifyJs, 'uglifyJs is required')
    requireOption(minifyCss, 'minifyCss is required')
    requireOption(BABEL_ENV, 'BABEL_ENV is required')
    requireOption(useNamedModules, 'useNamedModules is required')
    requireOption(useFullSourceMaps, 'useFullSourceMaps is required')
    requireOption(enableSentryUploads, 'enableSentryUploads is required')

    process.env.BABEL_ENV = BABEL_ENV // eslint-disable-line no-process-env

    const rules = []
    const plugins = []
    const externals = {}

    /* ----- CSS ----- */
    const styleLoader = {
        loader: 'style-loader',
    }
    const cssLoader = {
        loader: 'css-loader',
        options: {
            importLoaders: 1,
            modules: {
                localIdentName: '[local]--[hash:base64:5]',
            },
            // minimize: minifyCss,
            sourceMap: !disableSourceMaps,
        },
    }
    const thirdPartyCssLoader = {
        loader: 'css-loader',
        // options: { minimize: minifyCss },
    }

    const postCssLoader = {
        loader: 'postcss-loader',
        options: {
            // ident: 'postcss',
            sourceMap: !disableSourceMaps,
            postcssOptions: {
                plugins: postCssPlugins,
            },
        },
    }
    const cssModulesUse = [styleLoader, cssLoader, postCssLoader]

    const graphiqlUiCss = /graphiql\/.+\.css$/

    rules.push({
        exclude: [graphiqlUiCss],
        test: /\.css$/,
        use: cssModulesUse,
    })

    rules.push({
        test: [graphiqlUiCss],
        use: [styleLoader, thirdPartyCssLoader],
    })

    rules.push({
        test: [/\.less$/],
        use: [
            styleLoader,
            thirdPartyCssLoader,
            {
                loader: 'less-loader',
                options: {
                    sourceMap: !disableSourceMaps,
                    lessOptions: {
                        modifyVars: antdOverrides(),
                        javascriptEnabled: true,
                    },
                },
            },
        ],
    })

    /* ------ JS AND JSX ----- */

    if (generateAnalysis) {
        plugins.push(
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                defaultSizes: 'gzip',
                openAnalyzer: false,
                reportFilename: `report.${releaseId}.html`,
            }),
        )
    }

    if (generateIndexHtml) {
        plugins.push(
            new HtmlWebpackPlugin({
                apiRootUrl,
                template: 'src/index.ejs',
                filename: stableIndexFile
                    ? 'index.html'
                    : `app.${releaseId}.html`,
                chunks: ['bootloader'],
            }),
            new HtmlWebpackPlugin({
                apiRootUrl,
                template: 'src/embed.ejs',
                filename: stableIndexFile
                    ? 'embed.html'
                    : `embed.${releaseId}.html`,
                chunks: ['embed'],
            }),
        )
    }

    const tsxUse = [
        {
            // Configuration handled by .babelrc
            loader: 'babel-loader',
            options: assign({ cacheDirectory: true }, babelRc),
        },
    ]

    // Handle .ts/.tsx and .js/.jsx files
    const tsx = {
        exclude: [/node_modules/],
        include: [srcDir],
        test: /\.(tsx|jsx|ts|js)$/,
        use: tsxUse,
    }

    rules.push(tsx)

    rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
    })

    rules.push({
        test: /\.m?js/,
        resolve: {
            fullySpecified: false,
        },
    })

    /* ----- FONT FILES ----- */
    function buildFontRule(test, mimetype) {
        return {
            test,
            type: 'asset/resource',
        }
    }

    rules.push(buildFontRule(/\.woff$/, 'application/font-woff'))
    rules.push(buildFontRule(/\.woff2$/, 'application/font-woff2'))
    rules.push(buildFontRule(/\.[ot]tf$/, 'application/octet-stream'))
    rules.push(buildFontRule(/\.eot$/, 'application/vnd.ms-fontobject'))

    /* ------ IMAGES ----- */
    rules.push({
        test: /\.(png|jpg|gif)$/,
        type: 'asset/resource',
    })

    rules.push({
        test: /\.svg/,
        type: 'asset/inline',
    })

    /* ------ MISC FILES ----- */

    if (useThreads) {
        tsxUse.unshift({
            loader: 'thread-loader',
            options: {
                workers: MAX_CORES / 2,
                name: 'tsx',
            },
        })
        cssModulesUse.unshift({
            loader: 'thread-loader',
            options: {
                workers: MAX_CORES / 2,
                name: 'css',
            },
        })
    }

    // glsl files are shader files from Three.js and must be inlined as raw text
    rules.push({
        test: /\.(glsl|vert|frag|vs|fs)$/,
        type: 'asset/source',
    })

    // stl files are model triangle files and should be loaded as files externally
    rules.push({
        test: /\.(stl)$/,
        type: 'asset/resource',
    })

    /* ------ MISC PLUGINS ----- */

    // Every time we build, we first clean the previous build out. We do this for the webpack server build
    // too even though it has no effect
    plugins.push(new CleanWebpackPlugin())

    // We use a manifest file for keeping track of what assets were built and staged
    plugins.push(new ManifestPlugin({ filename: `${releaseId}.manifest.json` }))

    // Define some variables we use in our source code for knowing
    // what environment we're compiled into
    // prettier-ignore
    plugins.push(
        // prettier-ignore
        new webpack.DefinePlugin({
            // important that values for DefinePlugin are double quoted!
            __RELEASE_ID__: JSON.stringify(releaseId),
            __INIT_APPS__: initializeApps,
            'process.env': { NODE_ENV: JSON.stringify(NODE_ENV) },
        }),
    )

    // prettier-ignore
    plugins.push(
        // Ignore all locale files of moment.js
        // source: https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
        // Update for IgnorePlugin: https://webpack.js.org/plugins/ignore-plugin/#using-filter-functions
        new webpack.IgnorePlugin({
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/,
        }),
    )

    plugins.push(
        // Ignore .js.flow imports for graphiql
        // source: https://github.com/graphql/graphql-language-service/issues/111
        // Update for IgnorePlugin: https://webpack.js.org/plugins/ignore-plugin/#using-filter-functions
        new webpack.IgnorePlugin({
            resourceRegExp: /\.js\.flow$/,
            contextRegExp:
                /node_modules\/graphql-language-service-interface\/dist$/,
        }),
    )

    plugins.push(
        // Add the Buffer plugin.
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
    )

    // prettier-ignore
    if (enableSentryUploads) {
        plugins.push(
            new SentryWebpackPlugin({
                // Release is filled automatically with the git sha with
                // a utility provided by this plugin
                // release: <git-sha>,
                include: './build',
                configFile: path.resolve(rootDir, '.sentryclirc'),
                urlPrefix: sentryUrlPrefix,
            })
        )
    }

    // PDFTron copy static assets
    // plugins.push(
    //     new CopyPlugin({
    //         patterns: [
    //             {
    //                 from: './node_modules/@pdftron/webviewer/public',
    //                 to: path.resolve(outputDir, 'pdftron'),
    //             },
    //         ],
    //     }),
    // )

    /* ------ TEST EXTERNALS ------- */
    if (useTestExternals) {
        // For our integration test builds, we need to specify some
        // node_module packages as "external" so that webpack doesn't
        // try to bundle them, and instead uses CommonJS (or other)
        // requires on them.
        externals.jsdom = 'commonjs jsdom'
        externals.sinon = 'commonjs sinon'
    }

    /* ------ ENTRIES ----- */
    // Add the hot reload script to the build output for certain apps if
    // we're developing locally
    const entry = {
        // react-hot-loader
        // The webpack patch, hot, Babel plugin, @hot-loader/react-dom etc. are all safe to use in production
        // https://github.com/gaearon/react-hot-loader#what-about-production

        bootloader: [
            'whatwg-fetch',
            'react-hot-loader/patch',
            path.resolve(srcDir, 'webpack-entry.js'),
        ],
        embed: [
            'whatwg-fetch',
            path.resolve(srcDir,'webpack-entry.js'),
        ],
    }

    const result = {
        devtool: disableSourceMaps
            ? false
            : useFullSourceMaps
            ? 'source-map'
            : 'cheap-module-source-map',
        entry,
        externals,
        module: { rules },
        output: {
            chunkFilename: '[chunkhash].js',
            filename: `[name].${releaseId}.js`,
            path: outputPath,
            publicPath,
            crossOriginLoading: 'anonymous', // Should fix the react 16 cross-origin errors
        },
        plugins,
        devServer,
        mode: isProduction ? 'production' : 'development',
        optimization: {
            // Update for IgnorePlugin: https://webpack.js.org/plugins/ignore-plugin/#using-filter-functions
            // should we consider removing it? https://webpack.js.org/migrate/5/#clean-up-configuration
            // moduleIds: useNamedModules && 'named',
            minimize: uglifyJs,
            minimizer: [
                new TerserPlugin({
                    // new opts: https://www.npmjs.com/package/terser-webpack-plugin
                    minify: TerserPlugin.terserMinify,
                    terserOptions: {
                        compress: false,
                        mangle: false,
                        safari10: true,
                        sourceMap: useFullSourceMaps,
                        nameCache: {},
                    },
                    parallel: MAX_CORES,
                }),
            ],
        },
        resolve: {
            alias: {
                rx$: path.resolve(rootDir, 'node_modules/rx/dist/rx.js'),
                'react-dom': '@hot-loader/react-dom',
            },
            extensions: ['.json', '.mjs', '.js', '.tsx', '.ts', '.jsx'],
            modules: ['node_modules', stylesDir],
            fallback: {
                fs: false,
                // rest of them: for including polyfill
                zlib: require.resolve('browserify-zlib'),
                path: require.resolve('path-browserify'),
                util: require.resolve('util/'),
                stream: require.resolve('stream-browserify'),
                assert: require.resolve('assert/'),
            },
        },
    }

    return result
}
