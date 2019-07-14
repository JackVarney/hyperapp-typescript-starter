const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ],

  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  }
};
