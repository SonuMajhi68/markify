const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",

  entry: "./src/renderer/app.js",

  devtool: "inline-source-map",

  target: "electron-renderer",

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
              "@babel/preset-react",
            ],
          },
        },
      },
      {
        test: [/\.s[ac]ss$/i, /\.css$/i],
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".js"],
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};
