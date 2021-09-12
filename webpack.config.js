const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.js", "./src/extra.js"],
  output: {
    path: __dirname + "/build",
    filename: "index_bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Markify",
    }),
  ],
};
