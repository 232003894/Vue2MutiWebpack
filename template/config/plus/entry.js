var path = require('path')
var dir = require('../base/dir')
var pageArr = require('../base/page-entries')
var configEntry = {};

pageArr.forEach((page) => {
  var basename = 'entry.js'
  if (path.basename(page) === basename) {
    var _page = page.replace('\/' + basename, '').replace('\/', '_')
    configEntry[_page] = path.resolve(dir.pagesDir, page)
  }
})

module.exports = configEntry;
