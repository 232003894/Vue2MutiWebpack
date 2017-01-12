var webpack = require('webpack')
var FriendlyErrors = require('friendly-errors-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var dirVars = require('../base/dir')
var pageArr = require('../base/page-entries')
var entries = require('./entry')
var config = require('../../build/config')

var pluginsConfig = []
// 环境参数
pluginsConfig.push(new webpack.DefinePlugin({
  'process.env': config.dev.env
}))
pluginsConfig.push(new webpack.optimize.OccurenceOrderPlugin())
pluginsConfig.push(new webpack.HotModuleReplacementPlugin())
pluginsConfig.push(new webpack.NoErrorsPlugin())
pluginsConfig.push(new FriendlyErrors())

pageArr.forEach((page) => {
  var basename = 'template.html'
  if (path.basename(page) === basename) {
    var _page = page.replace('\/' + basename, '').replace('\/', '_')
    var conf = {
      filename: config.dev.htmlDir + '/' + _page + '.html',
      template: path.resolve(dirVars.pagesDir, `./${page}`), // 模板路径
      inject: true // js插入位置
    }
    if (_page in entries) {
      conf.chunks = ['base', _page]
      //是否加hash参数: 例如 *.js?fdlfjdlfjdl245
      conf.hash = true;
    }
    pluginsConfig.push(new HtmlWebpackPlugin(conf))
  }

})

module.exports = pluginsConfig
