import react from "@vitejs/plugin-react-swc";
import {defineConfig} from "vite";
import {viteCommonjs} from "@originjs/vite-plugin-commonjs";
import fs from "node:fs";
import * as esbuild from "esbuild";
import {babel} from "@rollup/plugin-babel";

const sourceJSPattern = /\/src\/.*\.js$/;
const rollupPlugin = (matchers) => ({
  name: "js-in-jsx",
  load(id) {
    if (matchers.some(matcher => matcher.test(id))) {
      const file = fs.readFileSync(id, {encoding: "utf-8"});
      return esbuild.transformSync(file, {loader: "jsx"});
    }
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic"
    }),
    viteCommonjs()
  ],
  build: {
    rollupOptions: {
      plugins: [
        rollupPlugin([sourceJSPattern])
      ],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
      plugins: [],
      mainFields: ["module", "main"],
      resolveExtensions: [".web.js", ".js", ".ts"],
    },
  },
  resolve: {
    extensions: [".web.tsx", ".web.jsx", ".web.js", ".tsx", ".ts", ".js",
      ".jsx"],
    preserveSymlinks: true,
  },
  esbuild: {
    jsxFactory: "jsx",
    jsxFragment: "jsx.Fragment",
    loader: "jsx",
    include: [
      sourceJSPattern,
      "src/**/*.jsx",
      "src/**/*.tsx",
      "node_modules/**/*.jsx",
      "node_modules/**/*.tsx",
      "src/**/*.js",
      "node_modules/**/*.js",
      "src/**/*.ts",
      "node_modules/**/*.ts",
    ],
    exclude: [],
  },
});
