const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = 'localhost';
const PORT = 3001;

const METADATA = {
  title: 'My Test Application',
  host: HOST,
  port: PORT
};

function root(args) {
  return __dirname + '/' + args;
}

module.exports = {
  entry: './src/app/index.ts',
  output: {
    path: root('dist'),
    filename: 'bundle.js',
    sourceMapFilename: '[file].map'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx ? $ /,
        use: 'awesome-typescript-loader'
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
      favicon: './src/assets/icon/favicon.ico'
    })
  ],
  devtool: 'source-map',
  devServer: {
    port: METADATA.port,
    host: METADATA.host,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
