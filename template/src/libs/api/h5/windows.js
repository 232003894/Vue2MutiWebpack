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
 * 隐藏指定窗口
 * @export
 * @param {any} webview
 * @param {any} showLoading
 */
export function hideWindow(webview) {
  utils.log(os.name + ' 环境 不支持 ' + 'hideWindow ' + '!')
}

/**
 * 关闭指定窗口
 * @export
 * @param {any} webview
 * @param {any} showLoading
 */
export function closeWindow(webview) {
  utils.log(os.name + ' 环境 不支持 ' + 'closeWindow ' + '!')
}

/**
 * Dom加载完成
 * @param {function} callback
 * @param {Boolean} inRefresh 默认是false
 * @returns
 */
export function onload(callback, inRefresh) {
  let readyRE = /complete|loaded|interactive/
  if (inRefresh === true) {
    var isIn = _refreshs.some((item) => {
      return callback.toString() === item.toString()
    })
    if (!isIn) {
      _refreshs.push(callback)
    }
  }
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
 * web：等同于onload
 * 5+：‘plusready’后（window.plus存在）：立即执行，否则加入到‘plusready’事件中
 * @export
 * @param {Function} callback
 * @param {Boolean} inRefresh 默认是false
 */
export function mounted(callback, inRefresh) {
  // if (!(inRefresh === false)) {
  if (inRefresh === true) {
    var isIn = _refreshs.some((item) => {
      return callback.toString() === item.toString()
    })
    if (!isIn) {
      _refreshs.push(callback)
    }
  }
  if (window.plus) {
    // 解决callback与plusready事件的执行时机问题(典型案例:showWaiting,closeWaiting)
    setTimeout(() => {
      callback()
    }, 16.7)
  } else {
    // 修复：手机app中会调用2次的bug，window.plus改为os.plus
    if (os.plus) {
      document.addEventListener('plusready', function () {
        callback()
      }, false)
    } else {
      onload(callback)
    }
  }
  return this
}

/**
 * 业务逻辑刷新
 * @export
 * @returns
 */
export function refresh() {
  setTimeout(() => {
    webError(false)
  }, 50)
  _refreshs.forEach((cb, index) => {
    cb()
  })
  return this
}

/**
 * show error
 * @export
 * @param {any} value 显示或隐藏
 * @returns
 */
export function webError(value) {
  let _errs = document.querySelectorAll('.pro-webError')
  if (_errs.length > 0) {
    _errs.forEach((err) => {
      if (value === false) {
        err.className = 'pro-webError'
      } else {
        err.className = 'pro-webError active'
      }
    })
  } else {
    utils.log('无.pro-webError!')
  }
  return this
}

/**
 * 初始化网络错误层
 */
// function initWebError(containerSelector) {
//   containerSelector = containerSelector || '.weui_tab_bd.vux-fix-safari-overflow-scrolling'
//   // 总pro-webError数量
//   let _errs = document.querySelectorAll('.pro-webError')
//   // 总weui_tab_bd数量
//   let bds = document.querySelectorAll(containerSelector)
//   // 在weui_tab_bd中的pro-webError数量
//   let bdErrs = document.querySelectorAll(containerSelector + '>.pro-webError')

//   let bodyHasBd = document.querySelectorAll('body>#app' + ' .pro-webError').length > 0
//   // 有weui_tab_bd层 但 不是所有的weui_tab_bd层中都有错误层 的情况
//   if (bds.length > 0 && bds.length !== bdErrs.length) {
//     bds.forEach((bd) => {
//       if (bd.querySelectorAll('.pro-webError').length < 1) {
//         if (bd.hasChildNodes()) {
//           bd.insertBefore(getWebErrorDiv(), bd.childNodes[0])
//         } else {
//           bd.appendChild(getWebErrorDiv())
//         }
//       }
//     })
//   } else if (_errs.length < 1 && bds.length < 1) {
//     // 无错误层并且无weui_tab_bd 就直接追加到body
//     if (document.body.hasChildNodes()) {
//       document.body.insertBefore(getWebErrorDiv(), document.body.childNodes[0])
//     } else {
//       document.body.appendChild(getWebErrorDiv())
//     }
//   }
//   if (!bodyHasBd) {
//     let bodyApp = document.querySelector('body>#app')
//     if (bodyApp.hasChildNodes()) {
//       bodyApp.insertBefore(getWebErrorDiv(), bodyApp.childNodes[0])
//     } else {
//       bodyApp.appendChild(getWebErrorDiv())
//     }
//   }
// }

// function getWebErrorDiv() {
//   let ele = document.createElement('div')
//   ele.className = 'pro-webError'
//   ele.innerHTML = `<div class="ui-error" onclick="$api.refresh()">
//     <i class="icon iconfont">&#xe6e7;</i>
//     <h4>网络不给力</h4>
//     <div class="ui-button">
//       <button class="weui_btn weui_btn_default">重新加载</button>
//     </div>
//   </div>`
//   return ele
// }
