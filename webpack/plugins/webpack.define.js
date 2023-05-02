const webpack = require('webpack');

/**
 * @param options {{}}
 * @return {webpack.ProvidePlugin}
 */
module.exports = (options = {}) => {
    return new webpack.DefinePlugin(options);
};
