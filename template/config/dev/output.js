var dir = require('../base/dir')
var getPages = require('../base/buildPages')
getPages.build()
module.exports = {
  path: dir.buildDir,
  publicPath: '/',
  filename: '[name].js'
}
