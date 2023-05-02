/**
 * @DOC https://webpack.js.org/plugins/terser-webpack-plugin
 * @DOC https://www.npmjs.com/package/terser-webpack-plugin
 * @type {TerserPlugin}
 */
const TerserPlugin = require('terser-webpack-plugin');
/**
 * @DOC options https://github.com/terser/terser#minify-options
 * @param options {{}|undefined}
 * @param test {string|[]|undefined}
 * @param include {[]|undefined}
 * @param exclude {[]|undefined}
 * @returns {{optimization: {minimize: boolean, minimizer: *[]}}}
 */
module.exports = ({
    options,
    test,
    include,
    exclude,
} = {}) => {
    return {
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    include,
                    exclude,
                    test,
                    terserOptions: options,
                }),
            ],
        },
    };
};
