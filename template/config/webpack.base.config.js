'use strict'

var path = require('path')
var config = require('../build/config')
var dir = require('./base/dir')
var utils = require('./utils')
var merge = require('webpack-merge')

var env = process.env.NODE_ENV
// check env & config/index.js to decide whether to enable CSS source maps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

var webpackConfig = {
  resolve: {
    extensions: ['', '.js', '.vue', '.json'],
    fallback: [path.join(dir.staticRootDir, './node_modules')],
    alias: {
      {{#if_eq build "standalone"}}
      'vue$': 'vue/dist/vue.common.js',
      {{/if_eq}}
      'src': dir.srcRootDir,
      'assets': dir.assetsDir,
      'components': dir.componentsDir,
      /* config */
      'config': path.resolve(dir.configDir, '')
    }
  },
  resolveLoader: {
    fallback: [path.join(dir.staticRootDir, './node_modules')]
  },
  module: {
    {{#lint}}
    preLoaders: [{
        test: /\.vue$/,
        loader: 'eslint',
        include: [
          dir.srcRootDir
        ],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: [
          dir.srcRootDir
        ],
        exclude: /node_modules/
      }
    ],
    {{/lint}}
    loaders: [{
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          dir.srcRootDir
        ],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'img/[name].[ext]?[hash]'
          // name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'fonts/[name].[ext]?[hash]'
          // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  {{#lint}}
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  {{/lint}}
  vue: {
    loaders: utils.cssLoaders({
      sourceMap: useCssSourceMap
    }),
    postcss: [
      /**
       * 参考：https://github.com/ai/browserslist#queries
       * last 2 versions: 主流浏览器的最新两个版本
       * last 1 Chrome versions: 谷歌浏览器的最新版本
       * last 2 Explorer versions: IE的最新两个版本
       * last 3 Safari versions: 苹果浏览器最新三个版本
       * Firefox >= 20: 火狐浏览器的版本大于或等于20
       * iOS 7: IOS7版本
       * Firefox ESR: 最新ESR版本的火狐
       * > 5%: 全球统计有超过5%的使用率
       * 各浏览器的标识：
       * Android for Android WebView.
       *BlackBerry or bb for Blackberry browser.
       *Chrome for Google Chrome.
       *Firefox or ff for Mozilla Firefox.
       *Explorer or ie for Internet Explorer.
       *iOS or ios_saf for iOS Safari.
       *Opera for Opera.
       *Safari for desktop Safari.
       *OperaMobile or op_mob for Opera Mobile.
       *OperaMini or op_mini for Opera Mini.
       *ChromeAndroid or and_chr
       *FirefoxAndroid or and_ff for Firefox for Android.
       *ExplorerMobile or ie_mob for Internet Explorer Mobile.
       */
      require('autoprefixer')({
        browsers: ['last 2 versions', 'Android >= 4.0']
      })
    ]
  }
}

// vux
const vuxLoader = require('vux-loader')

module.exports = vuxLoader.merge(webpackConfig, {
  options: {},
  plugins: [{
    name: 'vux-ui'
  }, {
    name: 'script-parser',
    fn: function (source) {
      return _parser(source)
    }
  }, {
    name: 'js-parser',
    test: /entry\.js/,
    fn: function (source) {
      return _parser(source)
    }
  }, {
    name: 'js-parser',
    test: /entry\.js/,
    fn: function (source) {
      var str = ['1', '2']
      str = `[${str.join(',\n')}]`
      source = source.replace(`const Vue = () => {}`, `import Vue from 'vue'
import config from 'config'
config(Vue)
// 添加Fastclick移除移动端点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)
`)
      // console.log(source)
      return source
    }
  }, {
    name: 'script-parser',
    fn: function (source) {
      return source.replace(/\$box/g, 'this.$refs.cBox')
    }
  }, {
    name: "template-parser",
    replaceList: [{
      test: /<view-box/g,
      replaceString: '<view-box ref="cBox"'
    }]
  }, {
    name: 'inline-manifest'
  }, {
    name: 'duplicate-style'
  }, {
    name: 'less-theme',
    path: 'src/assets/theme.less'
  }]
})

const maps = require('../src/components/map.json')
const parser = require('./base/import-parser')

function _parser(source) {
  if (/}\s+from(.*?)'app'/.test(source)) {
    source = parser(source, function (opts) {
      let str = ''
      opts.components.forEach(function (component) {
        let file = `${maps[component.originalName]}`
        str += `import ${component.newName} from '${file}'\n`
      })
      return str
    }, 'app')
  }
  return source
}
