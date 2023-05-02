/**
 * @link @link https://www.npmjs.com/package/eslint-webpack-plugin
 */
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (options = {}) => {
    return new ESLintPlugin(options);
};
