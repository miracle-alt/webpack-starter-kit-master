const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'my-build.js',
    path: path.resolve(__dirname, 'duild'),
  },
  module: {
      rules: [
        {
            test: /\.scss$/i,
            test: /\.css$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
  devServer: {
    port: 9000,
    open: true,
    stats: 'errors-only',
  },
};



