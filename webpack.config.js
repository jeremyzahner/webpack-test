var webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    path = require('path');

module.exports = {
  context: __dirname,
  devServer: {
    hot: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      stats: { colors: true }
    },
  },
  entry: [
      path.join(__dirname, 'resources/js/app.js'),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'main.js',
    chunkFilename: '[hash]/js/[id].js',
    hotUpdateMainFilename: '[hash]/update.json',
    hotUpdateChunkFilename: '[hash]/js/[id].update.js',
  },
  recordsOutputPath: path.join(__dirname, 'dist/records.json'),
  module: {
    loaders: [
      {
        test: /\.lesss$/,
        loader: 'style-loader!css-loader!less-loader',
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader?prefix=img/&limit=5000',
      },
      {
        test: /\.gif$/,
        loader: 'url-loader?prefix=img/&limit=5000',
      },
    ],
  },
};
