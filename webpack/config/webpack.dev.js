/* config for develop mode */
const {merge} = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    stats: 'minimal',
    /* stats: {
        // copied from `'minimal'`
        preset: 'minimal',
        assets: false,
        modules: true,
        maxModules: 0,
        errors: false, // disabled errors
        warnings: false, // disabled warnings
        // our additional options
        moduleTrace: true,
        errorDetails: true
    }, */
    devtool: 'source-map',
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    plugins: [
        // plugins.friendlyErrors(),
        // plugins.bundleAnalyzer(),
        // plugins.dashboard()
        // plugins.browserSync()
    ]
});
