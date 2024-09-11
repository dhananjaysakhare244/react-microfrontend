const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 5001,
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
};
