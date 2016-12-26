var Webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = 'localhost';
const PORT = 3001;
const METADATA = {
  title: 'My Test Application',
  host: HOST,
  port: PORT
};

module.exports = {
  entry: './src/app/index.ts',
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js',
    sourceMapFilename: '[file].map'
  },
  resolve: {
    extensions: ['.ts', 'js', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.tsx ? $ /,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: METADATA.title,
      chunksSortMode: 'dependency',
      metadata: METADATA,
      inject: true,
      favicon: 'src/assets/icon/favicon.ico'
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    port: METADATA.port,
    host: METADATA.host,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};