const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",

  entry: "./src/main/main.js",

  devtool: "inline-source-map",

  target: "electron-main",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    esmodules: true,
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },

  resolve: {
    extensions: [".js"],
  },

  output: {
    filename: "bundle.main.js",
    path: path.resolve(__dirname, "build"),
  },
};
