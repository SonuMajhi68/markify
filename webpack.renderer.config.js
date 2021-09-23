const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./src/renderer/index.js",

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
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },

  resolve: {
    extensions: [".js"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Markify",
      template: "./src/index.ejs",
    }),
  ],

  output: {
    filename: "bundle.renderer.js",
    path: path.resolve(__dirname, "build"),
  },
};
