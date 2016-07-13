const ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: './src/index.jsx',
  output: {
    path: './dist',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel']
      },
      {
        test: /\.scss$/,
        // loaders: ['style', 'css', 'sass']
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
}
module.exports = config;
