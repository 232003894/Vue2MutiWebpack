var path = require('path')
var pageArr = require('../base/page-entries')
var configEntry = {};

pageArr.forEach((page) => {
  var basename = 'entry.js'
  if (path.basename(page) === basename) {
    var _page = page.replace('\/' + basename, '').replace('\/', '_')
    configEntry[_page] = './src/pages/' + page
  }
})

Object.keys(configEntry).forEach(function (name) {
  configEntry[name] = ['./build/dev-client'].concat(configEntry[name])
})

module.exports = configEntry;
