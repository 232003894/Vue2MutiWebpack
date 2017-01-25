// 窗口控制的和 onload(网页加载完成)
import {
  pages
}
from '../pages'
import {
  os
} from './os.js'
import * as utils from './utils'
/**
 * 打开新页面
 * web:直接打开新url
 * @export
 * @param {any} id 页面id
 * @returns
 */
export function open(id) {
  if (!id) {
    utils.log('open id不能为空!')
    return
  }
  window.location.href = pages[id] || id
  return null
}

/**
 * 回到首页
 * @export
 */
export function goHome() {
  open('index')
}

/**
 * 当前窗体
 */
export var currentWebview = null

/**
 * 是否主页
 */
export var isHomePage = false

/**
 * 显示指定窗口
 * @export
 * @param {any} webview
 * @param {any} showLoading
 */
export function showWindow(webview, showLoading) {
  utils.log(os.name + ' 环境 不支持 ' + 'showWindow ' + '!')
}

/**
 * Dom加载完成
 * @param {function} callback
 * @returns
 */
export function onload(callback) {
  let readyRE = /complete|loaded|interactive/
  if (readyRE.test(document.readyState)) {
    callback()
  } else {
    document.addEventListener('DOMContentLoaded', callback, false)
  }
  return this
}

let _refreshs = []
/**
 * 设备的加载完成
 * web,5+ 有效
 * web:延时500毫秒后执行
 * 5+:5+plus加载完成后执行
 * @export
 * @param {Function} callback
 * @param {Boolean} needRefresh
 */
export function mounted(callback, needRefresh) {
  if (!(needRefresh === false)) {
    var isIn = _refreshs.some((item) => {
      return callback.toString() === item.toString()
    })
    if (!isIn) {
      _refreshs.push(callback)
    }
  }
  if (window.plus) {
    // 解决callback与plusready事件的执行时机问题(典型案例:showWaiting,closeWaiting)
    // setInterval(callback, 0)
    setTimeout(callback, 16.7)
  } else {
    document.addEventListener('plusready', callback, false)
    setTimeout(() => {
      if (!window.plus) {
        callback()
      }
    }, 500)
  }
  return this
}

/**
 * 业务逻辑刷新
 * @export
 * @returns
 */
export function refresh() {
  _refreshs.forEach((cb, index) => {
    cb()
  })
  // init.webError(false)
  return this
}
