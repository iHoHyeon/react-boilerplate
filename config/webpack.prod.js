const path = require('path');

const TerserJSPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [new TerserJSPlugin({})],
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: './',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    clean: true,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  // plugins: [new BundleAnalyzerPlugin()],
});
