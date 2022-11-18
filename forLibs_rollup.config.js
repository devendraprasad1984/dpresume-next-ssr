import react from 'react';
import reactDom from 'react-dom';

import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import {uglify} from "rollup-plugin-uglify";
import replace from "@rollup/plugin-replace";
import serve from "rollup-plugin-serve";
import filesize from "rollup-plugin-filesize";
import css from "rollup-plugin-import-css"
import json from '@rollup/plugin-json'
import externalPeer from "rollup-plugin-peer-deps-external";
import builtins from 'rollup-plugin-node-builtins';
import html from "@rollup/plugin-html";

const NODE_ENV = process.env.NODE_ENV || 'development'
export default {
    preferBuiltins: true,
    external: ['react', 'react-dom'],
    input: "src/index.js",
    output: [{
        file: "bundle/bundle.js",
        format: "es",
    }],
    esModuleInterop: true,
    makeAbsoluteExternalsRelative: true,
    preserveEntrySignatures: 'strict',
    esModule: true,
    generatedCode: {
        reservedNamesAsProps: true
    },
    interop: 'compat',
    systemNullSetters: false,
    plugins: [
        resolve(),
        commonjs({
            include: 'node_modules/**',
            namedExports: {
                'react': Object.keys(react),
                'react-dom': Object.keys(reactDom),
                'node_modules/react-is/index.js': ['isValidElementType']
            }
        }),
        builtins(),
        babel({
            exclude: "node_modules/**"
        }),
        externalPeer({
            includeDependencies: true
        }),
        css(),
        json(),
        replace({
            "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
            preventAssignment: true
        }),
        filesize(),
        NODE_ENV !== 'production' && serve({contentBase: ['','dist','static'], historyApiFallback: true}),
        NODE_ENV !== 'production' && livereload(),
        NODE_ENV === 'production' && uglify(),
        html()
    ],
}