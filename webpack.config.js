const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src/ts/index.ts"),
  externals: {
    "goog:app.hello": "app.hello"
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HTMLPlugin({ template: path.join(__dirname, "src/index.html") })
  ]
};
