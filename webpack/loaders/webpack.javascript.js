const config = require('./../config/webpack.config');

module.exports = ({include, exclude} = {}) => ({
    output: {
        filename: 'js/[name].js',
        publicPath: config.path.publicPathAssets, // set path to chunks
        chunkFilename: 'js/chunks/[name].[contenthash].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                include,
                exclude,
                use: ['babel-loader']
            }
        ]
    }
});
