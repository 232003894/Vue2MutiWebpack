var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
var dir = require('../base/dir')
var pageArr = require('../base/page-entries')
var entries = require('./entry')
var _chunks = Object.keys(entries);
var config = require('../../build/config')

var pluginsConfig = []
// 提取公共模块
pluginsConfig.push(new webpack.optimize.CommonsChunkPlugin({
  name: 'base', // 公共模块的名称
  chunks: _chunks, // chunks是需要提取的模块
  minChunks: _chunks.length
}))

// 环境参数
pluginsConfig.push(new webpack.DefinePlugin({
  'process.env': config.dev.env,
  IS_PRODUCTION: false
}))

pluginsConfig.push(new webpack.optimize.OccurenceOrderPlugin())

// 配置提取出的样式文件
pluginsConfig.push(new ExtractTextPlugin('css/[name].css'))

pageArr.forEach((page) => {
  var ext = '.html'
  var basename = 'template' + ext
  // if (path.extname(page).toLowerCase() === ext) {
  if (path.basename(page) === basename) {
    var _page = page.replace('\/' + basename, '').replace('\/', '_')
    var conf = {
      filename: config.htmlDir + '/' + _page + ext,
      template: path.resolve(dir.pagesDir, `./${page}`), // 模板路径
      // template: path.resolve( `./src/pages/${page}` ), // 模板路径
      inject: true, // js插入位置
      minify: {
        removeComments: true,
        collapseWhitespace: false
        // removeAttributeQuotes: true
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
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
