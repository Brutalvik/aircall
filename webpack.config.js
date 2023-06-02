const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      Components: path.resolve(__dirname, "src/Components"),
      UI: path.resolve(__dirname, "src/UI"),
      app: path.resolve(__dirname, "src/app"),
      helpers: path.resolve(__dirname, "src/helpers"),
      // Add more aliases for your project directories here if needed
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": {
        API_URL: JSON.stringify(
          "https://cerulean-marlin-wig.cyclic.app/activities"
        ),
      },
    }),
  ],
};
