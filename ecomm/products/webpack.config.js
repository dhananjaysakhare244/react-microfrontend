const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugIn = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 5000,
  },
  plugins: [
    new ModuleFederationPlugIn({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductsIndex": "./src/index",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
