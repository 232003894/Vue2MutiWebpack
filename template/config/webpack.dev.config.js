var config = require('../build/config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.config')

module.exports = merge(baseWebpackConfig, {
  entry: require('./dev/entry'),
  output: require('./dev/output'),
  module: {
    loaders: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap
    })
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: require('./dev/plugins')
})
