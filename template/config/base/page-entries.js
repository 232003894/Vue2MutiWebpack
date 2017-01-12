var glob = require('glob')
var dir = require('./dir')
var options = {
  // 在pages目录里找
  cwd: dir.pagesDir,
  // 这里不能异步，只能同步
  sync: true
}

// 考虑到多个页面共用HTML等资源的情况，跳过以'_'开头的目录
var globInstance = new glob.Glob('**', options)

// 一个数组，形如['index/index', 'index/login', 'alert/index']
module.exports = globInstance.found
console.log(globInstance.found)
