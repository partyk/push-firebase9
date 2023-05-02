const path = require('path');
const config = require('./webpack.config');
const {merge} = require('webpack-merge');
// loader
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
    watchOptions: {
        ignored: /node_modules/
    },
    devServer: {
        static: {
            directory: path.resolve(config.path.dist),
        },
    },
    // watch: true,
    plugins: [
    ]
});
