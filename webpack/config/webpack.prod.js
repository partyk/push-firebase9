/* config for develop mode */
const {merge} = require('webpack-merge');
const common = require('./webpack.common');
// plugins
const {terser} = require('./../modules/index');

module.exports = merge(common, {
    mode: 'production',
    // https://webpack.js.org/configuration/performance/
    performance: {
        hints: 'warning',
    },
    stats: {
        preset: 'minimal',
    },
    ...terser(),
});
