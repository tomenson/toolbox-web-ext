const { join, resolve } = require('path');

/** @type {import('webpack').Configuration} */
const config = {
  entry: {
    background: join(__dirname, 'src/background/index.ts'),
    popup: join(__dirname, 'src/popup/index.tsx'),
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\app.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.module.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: join(__dirname, 'dist/js'),
  },
  resolve: {
    alias: {
      '@src': resolve(__dirname, 'src/'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
};

module.exports = config;
