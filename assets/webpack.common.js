/*
========================================================================
  Dependencies
========================================================================
*/

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/*
========================================================================
  Configuration
========================================================================
*/

module.exports = {
  entry: {
    app: "./js/app.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [
                require("autoprefixer"),
                require("postcss-nested")
              ]
            }
          }
        ]
      }
    ]
  }
};
