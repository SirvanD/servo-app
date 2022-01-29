// import path from "path";
// import "dotenv/config";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const config = {
  entry: "./public/client.js",
  // entry: "./public/index.html",
  output: {
    path: path.resolve(__dirname, "./public/dist"),
    filename: "bundle.js",
    publicPath: "./public/dist",
    clean: true,
  },
  devtool: "inline-source-map",
  // devServer: {
  //   contentBase: path.resolve(__dirname, "./dist"),
  //   port: 5001,
  //   open: true,
  //   hot: true,
  //   // watchFiles: true,
  // },
  mode: "production",

  plugins: [
    new HtmlWebpackPlugin({
      title: "Servo App",
      filename: "bundle.html",
      template: path.resolve(__dirname, "./public/index.html"),
    }),
  ],

  // resolve: [".html", ".js"],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        // exclude: "./node_modules",
      },
      {test: /\.},
    ],
  },
};

module.exports = config;

// {
//   module.exports = {
//     entry: "./public/client.js",
//     output: {
//       filename: "client.js",
//       path: path.resolve(__dirname, "dist"),
//     },
//   };
//   plugins: [
//     new webpack.DefinePlugin({
//       // ... any other global vars
//       // API_KEY: JSON.stringify('1.2.3'),
//       // pull in your individual .env vars
//       GOOGLE_KEY: JSON.stringify(process.env.MAPS_API_KEY),
//     }),
//   ];
// }
