/*
==========================================================================================
  Dependencies
==========================================================================================
*/

const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

/*
==========================================================================================
  Configuration
==========================================================================================
*/

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../priv/static/js")
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/[name].css"
    }),
    new CopyWebpackPlugin([
      {
        from: "static/",
        to: "../"
      }
    ])
  ]
});
