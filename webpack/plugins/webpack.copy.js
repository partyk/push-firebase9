// @link doc https://github.com/webpack-contrib/copy-webpack-plugin
const config = require('./../config/webpack.config');
const CopyPlugin = require('copy-webpack-plugin');
const {merge} = require('webpack-merge');

module.exports = (options = {}) => {
    options = merge({
            patterns: [{
                from: config.dir.src + '/images',
                to: 'images',
            }],
        },
        options);
    return new CopyPlugin(options);
};
