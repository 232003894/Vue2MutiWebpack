var dirVars = require('../base/dir')
var getPages = require('../base/buildPages')
getPages.build()
module.exports = {
  path: dirVars.buildDir,
  publicPath: '/',
  filename: '[name].js'
}
