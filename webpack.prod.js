const { merge } = require('webpack-merge');

/** @type {import('webpack').Configuration} */
const config = {
  mode: 'production',
};

module.exports = merge(require('./webpack.common'), config);
