var webpack = require('webpack')
  , path = require('path');

module.exports = {
  context: __dirname,
  entry: path.join(__dirname, 'resources/js/app.js'),
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
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
      },
      {
        test: /\.(jpe?g|gif|png|ico)$/,
        loader: 'url-loader?prefix=img/&limit=5000',
      },
      {
        test: /\.woff2?$/,
        loader: 'url-loader?prefix=font/&limit=5000',
      },
      {
        test: /\.(eot|ttf|svg)$/,
        loader: 'file-loader?prefix=font/',
      },
    ],
  },
};
