var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'CNU Games',
      template: 'src/index_facebook.html',
      filename: 'index.html',
      hash: true
    }),
    new HtmlWebpackPlugin({
      title: 'CNU Games',
      template: 'src/index_facebook2.html',
      filename: 'test.html',
      hash: true
    }),
    new HtmlWebpackPlugin({
      title: 'CNU Games',
      template: 'src/index_oauth2.html',
      filename: 'oauth2.html',
      hash: true
    }),
    new HtmlWebpackPlugin({
      title: 'CNU Games',
      template: 'src/index_spring.html',
      filename: 'spring.html',
      hash: true
    }),
    new HtmlWebpackPlugin({
      title: 'CNU Games',
      template: 'src/index_login.html',
      filename: 'login.html',
      hash: true
    }),
    new HtmlWebpackPlugin({
      title: 'CNU Games',
      template: 'src/index_main.html',
      filename: 'main.html',
      hash: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },
  node: {
    net:'empty'
  }
};


module.exports = webpackConfig;
