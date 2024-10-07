const path = require("path");

module.exports = {
  entry: {
    main: './src/app.js',
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/, // loader가 처리할 pattern
        use: [
          path.resolve('./my-webpack-loader')
        ]
      }
    ]
  }
}
