var webpack = require('webpack')
  , WebpackDevServer = require('webpack-dev-server')
  , path = require('path')
  , BrowserSyncPlugin = require('browser-sync-webpack-plugin')
  , ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
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
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap!' +
          'less?sourceMap'
        )
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
      proxy: 'http://localhost:8080/'
    },
    {
      reload: false
    }),
    new ExtractTextPlugin('styles.css')
  ],
  noParse: [
    path.join(__dirname + '/node_modules/jquery/**/*.js'),
  ],
  cache: true,
};
