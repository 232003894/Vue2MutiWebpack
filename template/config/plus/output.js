var dir = require('../base/dir')
var getPages = require('../base/buildPages')
getPages.build()
module.exports = {
  path: dir.buildDir,
  publicPath: '../',
  // [name]表示entry每一项中的key，用以批量指定生成后文件的名称
  filename: 'js/[name].js'

  // filename: 'js/[name].[chunkhash:3].js'
  // ,
  // chunkFilename: 'js/[id].[chunkhash:3].js'
}
