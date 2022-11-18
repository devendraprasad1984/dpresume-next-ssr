'use strict' // eslint-disable-line

const bindAll = require('lodash/bindAll')
const pick = require('lodash/pick')

class SizeSource {
    constructor(str) {
        this.str = str
    }

    size() {
        return this.str.length
    }

    source() {
        return this.str
    }
}

const VERSION = '1'

class ManifestPlugin {
    constructor(options) {
        this.filename = options.filename || 'manifest.json'
        bindAll(this, 'emit')
    }

    emit(compilation) {
        const stats = compilation.getStats().toJson()
        const manifest = pick(stats, [
            'version',
            'hash',
            'publicPath',
            'assetsByChunkName',
            'assets',
            'entrypoints',
        ])

        manifest.pluginVersion = VERSION

        const prettySource = JSON.stringify(manifest, null, 2)

        compilation.assets[this.filename] = new SizeSource(prettySource)
    }

    apply(compiler) {
        compiler.hooks.emit.tap('dpxyz-manifest-plugin', this.emit)
    }
}

module.exports = ManifestPlugin
