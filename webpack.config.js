var path = require('path');
module.exports = {
  entry: "./app/assets/js/App.js",
  output: {
    path: path.resolve(__dirname,"./app/assets/js"),
    filename: "bundle.js"
  }
};
