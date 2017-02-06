import myMsg from 'vux/src/components/toast'
import {
  os
} from '../../libs/api/plus/os.js'

let $vm
let watcher
let nShow
let nHide
// 是否优先使用原生的,默认值false
let nativeFirst = false

const plugin = {
  install(vue, options) {
    const Msg = vue.extend(myMsg)

    if (!nShow) {
      nShow = options.toast
    }
    if (!nHide) {
      nHide = options.toastClose
    }

    if (!$vm) {
      $vm = new Msg({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    const show = (msg, options) => {
      options = options || {}
      if (options.nativeFirst === true) {
        nativeFirst = true
      }
      if (nativeFirst && os.plus) {
        // 优先使用原生并且是plus环境
        nShow(msg, options)
      } else {
        // destroy watcher
        watcher && watcher()
        // 提示内容，支持 html，和默认slot同样功能
        options.text = msg || ''
        if (typeof options === 'object') {
          // 类型，可选值 success, warn, cancel, text
          options.type = options.type || 'text'
          // 显示时间
          options.time = options.time || 2000
          // 是否显示遮罩，如果显示，用户将不能点击页面上其他元素
          if (options.isShowMask === undefined) {
            options.isShowMask = true
          }
          options.onShow = options.onShow || (() => {})
          options.onHide = options.onHide || (() => {})
          for (let i in options) {
            $vm[i] = options[i]
          }
          watcher = $vm.$watch('show', (val) => {
            val && options.onShow && options.onShow($vm)
            val === false && options.onHide && options.onHide($vm)
          })
        }
        $vm.show = true
      }
    }
    const hide = () => {
      if (nativeFirst && os.plus) {
        // 优先使用原生并且是plus环境
        nHide()
      } else {
        $vm.show = false
      }
    }
    vue.mixin({
      created: function () {
        options.toast && delete options.toast
        options.toast = show
        options.toastClose && delete options.toastClose
        options.toastClose = hide
      }
    })
  }
}

export default plugin
