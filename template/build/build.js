// https://github.com/shelljs/shelljs
require('./check-versions')()
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('../config/webpack.prod.config')
var dir = require('../config/base/dir')

rm('-rf', dir.buildDir)
console.log(
  '  Tip:\n' +
  '  可以用文件路径打开访问\n' +
  '  dist已清空\n'
)
var spinner = ora('生成中...')
spinner.start()

mkdir('-p', dir.buildDir)
cp('-R', 'static/', dir.buildDir)

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
    hash: false,
    version: false,
    timings: false
  }) + '\n')
})
