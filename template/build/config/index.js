// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

var copyPath = ''
var chromename = ''
var userDataPath = ''
if (process.platform == 'win32') { //windows
  chromename = 'chrome'
  userDataPath = 'D:\\tmp\\CMyChromeDevUserData'
  copyPath = 'D:\\chenw\\Documents\\HBuilderProject\\vuetest'
} else if (process.platform == 'darwin') { //windows
  chromename = 'google chrome'
  userDataPath = '/Users/kaifa/Documents/tmp'
} else { //'freebsd', 'linux', 'sunos'
  chromename = 'google-chrome'
  userDataPath = ''
}

module.exports = {
  build: {
    env: require('./prod.env'),
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    index: 'index.html',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  },
  htmlDir: "html",
  copyPath: copyPath,
  chrome: {
    //Chrome 在 OS X 中 'google chrome', 在 Linux 中 'google-chrome' 在 Windows 中'chrome'.
    name: chromename,
    debuggingPort: 9222,
    //chrome 49 以后跨域需要指定 --user-data-dir 指定出一个个人信息目录，而不能使用默认的目录,可以自行指定
    userDataPath: userDataPath
  }
}
