var glob = require('glob')
var dir = require('./dir')
var options = {
  // 在pages目录里找
  cwd: dir.pagesDir,
  // 这里不能异步，只能同步
  sync: true
}
var globInstance = new glob.Glob('**', options)

// 一个数组，形如['index/index', 'index/login', 'alert/index']
module.exports = globInstance.found