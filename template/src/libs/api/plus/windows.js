// 窗口控制的和 mounted(plus的ready)
import {
  pages
}
from '../pages'
import {
  fire,
  fireTree,
  fireAll
} from '../h5/event.js'
import {
  os
} from './os.js'
import * as utils from '../h5/utils.js'
import {
  // 显示等待对话框
  loading,
  // loading关闭
  loadingClose
}
from './msg/loading.js'

import * as _windows from '../h5/windows.js'

export var currentWebview = _windows.currentWebview
export var isHomePage = _windows.isHomePage
export var open = _windows.open
export var goHome = _windows.goHome
export var onload = _windows.onload
export var mounted = _windows.mounted
export var refresh = _windows.refresh
export var showWindow = _windows.showWindow

const loadingTitle = '载入中'
// 默认打开窗口样式配置
const defaultWin = {
  scalable: false,
  bounce: ''
}
// 默认窗口显示配置
const defaultShow = {
  duration: os.ios ? 300 : 200,
  aniShow: 'slide-in-right'
}
let _refreshs = []

if (os.plus) {
  /**
   * 显示指定窗口
   * @export
   * @param {any} webview
   * @param {any} showLoading
   */
  showWindow = (webview, showLoading, showOpts) => {
    if (showLoading !== false) {
      loading(loadingTitle, {
        onShow: () => {
          setTimeout(() => {
            loadingClose()
          }, os.ios ? 600 : 500)
        }
      })
    }
    showOpts = utils.mix(true, defaultShow, showOpts)
    console.log(showOpts)
    fireTree(webview, 'manualshow', showOpts)
  }

  /**
   * 打开新页面
   * web,5+ 有效
   * web:直接打开新url
   * 5+:打开新窗口
   * @export
   * @param {String} id
   * @param {Object} opts {extras,styles,showOpts}
   * @returns
   */
  open = (id, opts) => {
    if (!id) {
      utils.log('open id不能为空!')
      return
    }
    opts = opts || {}
    opts.extras = opts.extras || {}
    opts.styles = opts.styles || {}
    opts.showOpts = opts.showOpts || {}
    var url = pages[id] || id
    var webview = null

    if (window.plus) {
      webview = plus.webview.getWebviewById(id)
      if (webview) {
        // 显示已存在窗口
        loading(loadingTitle, {
          onShow: () => {
            setTimeout(() => {
              loadingClose()
            }, os.ios ? 1100 : 1000)
          }
        })
        setTimeout(() => {
          showWindow(webview, false, opts.showOpts)
        }, 500)
        return webview
      }
      // 创建新窗口
      webview = createWindow(url, id, opts.styles, opts.extras)
      showWindow(webview, true, opts.showOpts)
    } else {
      window.location.href = url
    }
    return webview
  }

  goHome = () => {
    if (window.plus) {
      loading(loadingTitle)
      var webview = window.plus.webview.getLaunchWebview()
      var top = window.plus.webview.getTopWebview()
      var _all = window.plus.webview.all()
      _all.forEach(function (el) {
        if (el.id !== webview.id && top.id !== el.id) {
          el.close('none')
        }
      }, this)
      setTimeout(() => {
        loadingClose()
        setTimeout(() => {
          top.close(defaultShow.aniShow.replace('in', 'out'), defaultShow.duration + 100)
        }, 100)
      }, 300)
    } else {
      _windows.open('index')
    }
  }
}

/**
 * 创建Webview窗口，用于加载新的HTML页面，可通过styles设置Webview窗口的样式，创建完成后需要调用show方法才能将Webview窗口显示出来。
 * @param {any} url
 * @param {any} id
 * @param {any} styles
 * @param {any} extras
 * @returns
 */
function createWindow(url, id, styles, extras) {
  if (!window.plus) {
    return
  }
  var webview
  if (!webview) {
    webview = window.plus.webview.create(url, id, utils.mix(defaultWin, styles), extras)
  }
  return webview
}
