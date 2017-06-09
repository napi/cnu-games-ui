var path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackConfig = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'CNU Games',
      template: 'src/index_template.html',
      filename: 'index.html',
      hash: true
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: false,
      allChunks: true
    })

     /*,  
    new HtmlWebpackPlugin({
      title: 'CNU Games',
      template: 'src/index_facebook.html',
      filename: 'facebook.html',
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
      template: 'src/index_main.html',
      filename: 'main.html',
      hash: true
    })
    */
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
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          fallback: "style-loader"
        })
      },

    ]
  },
  node: {
    net:'empty'
  }
};


module.exports = webpackConfig;
