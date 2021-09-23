const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
            use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        },
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({ template: 'src/index.html' }),
      new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
      }),
      new CleanWebpackPlugin(),
],
  devServer: {
    port: 9000,
    open: true,
  },
};



