/*
@link doc https://github.com/nuxt/webpackbar
 */
const WebpackBar = require('webpackbar');
const {merge} = require('webpack-merge');

module.exports = (options = {}) => {
    options = merge({
        name: 'compile',
    }, options);
    return new WebpackBar(options);
};
