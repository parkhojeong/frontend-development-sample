const path = require('path');
const MyWebpackPlugin = require('./my-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]?[hash]',
              publicPath: './dist',
              limit: 8192,
            }
          }
        ]


      }
    ]
  },
  plugins: [
    new MyWebpackPlugin(),
  ]
}
