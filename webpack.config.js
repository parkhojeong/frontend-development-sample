const path = require("path");

module.exports = {
  entry: {
    main: './src/app.js',
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  }
}
