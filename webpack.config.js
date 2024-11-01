const path = require("path"); //Imports the built-in path module from Node.js. The path module provides utility functions for working with file and directory paths. For example, it can be used to construct absolute paths, resolve paths, get file names, or extensions.
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Imports the html-webpack-plugin.This plugin simplifies the process of generating HTML files. It can automatically inject the bundled JavaScript files into the generated HTML file, making it easier for developers to manage and use.

module.exports = {
  mode: "production",
  entry: "./src/index.js",

  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        // type: "asset/resource",
        type: "asset",
        generator: {
          filename: "images/[name].[hash][ext]",
        },
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
