/**
 * @link @link https://github.com/johnagan/clean-webpack-plugin
 * @type {CleanWebpackPlugin}
 */
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {merge} = require('webpack-merge');
/**
 * plugin clean
 * @param options {object}
 * @returns {CleanWebpackPlugin}
 */
module.exports = (options = {}) => {
    options = merge({
        // cleanStaleWebpackAssets: false,
        protectWebpackAssets: false
    }, options);
    return new CleanWebpackPlugin(options);
};
