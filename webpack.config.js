var path = require('path');
module.exports = {
  cache: true,
  entry: "./docs/src/docs.js",
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "./docs/",
    filename: "docs.js",
    chunkFilename: "[chunkhash].js"
  }
};