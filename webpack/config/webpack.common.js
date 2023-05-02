const config = require('./webpack.config');
const path = require('path');
const entry = require('./webpack.entry');
const {merge} = require('webpack-merge');
// loader
const loaders = require('./../loaders/index');
// plugins
const plugins = require('./../plugins/index');

module.exports = merge(
    {
        entry,
        mode: 'development',
        // a complete list of "stats" setting is on https://webpack.js.org/configuration/stats/
        resolve: {
            extensions: ['.vue', '.js'/*, '.css', '.tsx', '.ts','.json' */],
            modules: [
                path.resolve(config.path.root, 'node_modules'),
            ],
        },
        output: {
            path: path.resolve(config.path.assets),
            publicPath: path.resolve(config.path.publicPathAssets),
        },
        plugins: [
            plugins.clean(),
            plugins.copy(),
            plugins.miniCssExtract(),
            // plugins.imageMin(),
            plugins.webpackBar(),
            plugins.ESLint({
                extensions: [
                    '.js',
                    '.vue',
                ],
            }),
        ],
    },
    loaders.vue(),
    loaders.javaScript(),
    loaders.styleCSS(),
    loaders.styleLess(),
    loaders.styleScss(),
    loaders.imageMinimizer(),
    // loaders.imageMin(),
);
