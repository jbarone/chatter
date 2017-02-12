var webpack = require("webpack");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    "./assets/js/application.js",
    "./assets/css/application.scss",
    "./node_modules/jquery-ujs/src/rails.js"
  ],
  output: {
    filename: "application.js",
    path: "./public/assets"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new ExtractTextPlugin({
      filename: "application.css"
    }),
    new CopyWebpackPlugin([{
      from: "./assets",
      to: ""
    }], {
      ignore: [
        "css/*",
        "js/*",
      ]
    })
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      options: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallback: "isomorphic-style-loader",
        use: [{
          loader: "to-string-loader"
        },{
          loader: "css-loader",
          options: { sourceMap: true, importLoaders: 1 }
        },{
          loader: "postcss-loader",
          options: {
            plugins: function () {
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        },{
          loader: "sass-loader",
          options: { sourceMap: true }
        }]
      })
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=application/octet-stream"
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file-loader"
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml"
    }]
  }
};
