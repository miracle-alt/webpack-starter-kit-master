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
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        },
    ],
  },
  devServer: {
    port: 9000,
    open: true,
    stats: 'errors-only',
  },
};



