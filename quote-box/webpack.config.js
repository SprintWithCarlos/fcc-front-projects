const path = require('path');

const rules = [
  {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  },
];
module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: { rules },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devServer: {
    contentBase: './',
    port: 5000,
    historyApiFallback: true,
  },
  devtool: 'eval',
};
