const isProduction = require('./../libs/isProduction');
const {merge} = require('webpack-merge');
const configProd = require('./webpack.config.prod');
let configLocal = {};

try {
    configLocal = require('./webpack.config.local');
    console.info('Using local configuration.');
} catch (exception) {
    console.info('Using global configuration only. For local configuration create webpack.config.local from webpack.config.example.js.');
}

module.exports = merge({
    isProduction: isProduction,
    isDevelop: !isProduction,
}, configProd, configLocal);
