/*
==========================================================================================
  Dependencies
==========================================================================================
*/

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/*
==========================================================================================
  Configuration
==========================================================================================
*/

module.exports = {
  entry: {
    app: path.resolve(__dirname, "./js/app.js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, "./node_modules/"),
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        exclude: [
          path.resolve(__dirname, "./node_modules/"),
          path.resolve(__dirname, "./static/")
        ],
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
