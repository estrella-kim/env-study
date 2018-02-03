const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    inline: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});