var path = require('path')
var config = require('../build/config')
var dir = require('./base/dir')
var utils = require('./utils')

var env = process.env.NODE_ENV
// check env & config/index.js to decide whether to enable CSS source maps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
  resolve: {
    extensions: ['', '.js', '.vue', '.json'],
    fallback: [path.join(dir.staticRootDir, './node_modules')],
    alias: {
      {{#if_eq build "standalone"}}
      'vue$': 'vue/dist/vue.common.js',
      {{/if_eq}}
      'src': dir.srcRootDir,
      'assets': dir.assetsDir,
      'components': dir.componentsDir
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
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'fonts/[name].[ext]?[hash]'
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
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  }
}
