const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugIn = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 5001,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new ModuleFederationPlugIn({
      name: "container",
      remotes: {
        products: "products@http://localhost:5000/remoteEntry.js",
      },
    }),
  ],
};
