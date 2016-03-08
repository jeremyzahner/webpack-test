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
        test: /\.lesss$/,
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
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {
        baseDir: path.join(__dirname + '/public/'),
      }
    }),
  ],
  noParse: [
    path.join(__dirname + '/node_modules/jquery/**/*.js'),
  ],
  cache: true,
};
