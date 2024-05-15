const { merge } = require('webpack-merge');

/** @type {import('webpack').Configuration} */
const config = {
  devtool: 'inline-source-map',
  mode: 'development',
};

module.exports = merge(require('./webpack.common'), config);
