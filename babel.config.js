module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                exclude: [
                    'es6.promise',
                    'transform-regenerator',
                    'transform-async-to-generator',
                ],
                useBuiltIns: 'usage',
                corejs: 2,
            },
        ],
        '@babel/preset-react',
        ['@babel/preset-typescript', { allExtensions: true, isTSX: true }],
    ],
    env: {
        test: {
            presets: [
                ['@babel/preset-env', { modules: 'commonjs' }],
                '@babel/preset-react',
                [
                    '@babel/preset-typescript',
                    { allExtensions: true, isTSX: true },
                ],
            ],
        },
        development: {
            plugins: [
                'babel-plugin-lodash',
                [
                    'babel-plugin-module-resolver',
                    {
                        cwd: 'babelrc',
                        alias: {
                            '~': './src',
                            // '@Quotes': './src/apps/consumer/pages/Quotes',
                            // '@Admin': './src/apps/consumer/pages/Quotes/Admin',
                        },
                    },
                ],
            ],
        },
        production: {
            plugins: ['babel-plugin-lodash'],
        },
    },
    plugins: [
        'react-hot-loader/babel',
        ['module:fast-async', { useRuntimeModule: true }],
        [
            '@babel/plugin-transform-runtime',
            {
                regenerator: false,
                helpers: true,
                corejs: false,
            },
        ],
        [
            'babel-plugin-module-resolver',
            {
                cwd: 'babelrc',
                alias: {
                    '~': './src',
                    // '@Quotes': './src/apps/consumer/pages/Quotes',
                    // '@Admin': './src/apps/consumer/pages/Quotes/Admin',
                },
            },
        ],
        'babel-plugin-transform-promise-to-bluebird',
        '@babel/plugin-transform-typescript',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-exponentiation-operator',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-export-namespace-from',
        [
            'babel-plugin-import',
            { libraryName: 'antd', libraryDirectory: 'es', style: true },
        ],
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-optional-chaining',
    ],
}
