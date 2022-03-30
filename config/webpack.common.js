const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@containers': path.resolve(__dirname, '../src/containers'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@sections': path.resolve(__dirname, '../src/sections'),
      '@constants': path.resolve(__dirname, '../src/constants'),
      '@models': path.resolve(__dirname, '../src/models'),
      '@remotes': path.resolve(__dirname, '../src/remotes'),
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@stores': path.resolve(__dirname, '../src/stores'),
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/inline',
      },
      {
        test: /\.svg$/,
        type: 'javascript/auto',
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new webpack.ProvidePlugin({ React: 'react' }),
  ],
};
