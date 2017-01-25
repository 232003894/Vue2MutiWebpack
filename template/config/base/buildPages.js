var path = require('path')
var glob = require('glob')
var fs = require('fs')
var dir = require('./dir')
var pageArr = require('./page-entries')
exports.build = function () {
  var entries = {},
    basename, tmp, pathname
  pageArr.forEach((entry) => {
    var ext = '.html'
    var basename = 'template' + ext
    // if (path.extname(entry).toLowerCase() === ext) {
    if (path.basename(entry) === basename) {
      tmp = entry.split('/')
      var star = tmp.indexOf("pages") + 1
      var length = tmp.length - star - 1
      pathname = tmp.splice(star, length).join('_')
      entries[pathname] = pathname + ext
    }
  })
  var jsStr = "export const pages = " + JSON.stringify(entries, null, 2).replace(/"/g, '\'')
  jsStr += "\r\n"
  fs.writeFileSync(path.resolve(dir.libsDir, 'api/build_pages.js'), jsStr)
}
