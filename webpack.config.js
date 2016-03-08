var webpack = require('webpack')
  , WebpackDevServer = require('webpack-dev-server')
  , path = require('path')
  , BrowserSyncPlugin = require('browser-sync-webpack-plugin');

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
  entry: path.join(__dirname, 'resources/js/app.js'),
  output: {
    path: path.join(__dirname, 'public/dist/'),
    publicPath: '/dist/',
    filename: 'main.js',
    chunkFilename: '[hash]/js/[id].js',
    hotUpdateMainFilename: '[hash]/update.json',
    hotUpdateChunkFilename: '[hash]/js/[id].update.js',
  },
  recordsOutputPath: path.join(__dirname, 'public/dist/records.json'),
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: 'style!css!less',
      },
      {
        test: /\.(jpe?g|gif|png|ico)$/,
        loader: 'url?prefix=img/&limit=5000',
      },
      {
        test: /\.woff2?$/,
        loader: 'url?prefix=font/&limit=5000',
      },
      {
        test: /\.(eot|ttf|svg)$/,
        loader: 'file?prefix=font/',
      },
    ],
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/',
    }),
  ],
  noParse: [
    path.join(__dirname + '/node_modules/jquery/**/*.js'),
  ],
  cache: true,
};
