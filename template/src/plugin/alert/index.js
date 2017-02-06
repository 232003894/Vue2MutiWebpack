import myMsg from 'vux/src/components/alert'
import {
  os
} from '../../libs/api/plus/os.js'

let $vm
let nShow
let nHide
// 是否优先使用原生的,默认值false
let nativeFirst = false

const plugin = {
  install(vue, options) {
    const Msg = vue.extend(myMsg)

    if (!nShow) {
      nShow = options.alert
    }
    if (!nHide) {
      nHide = options.alertClose
    }

    if (!$vm) {
      $vm = new Msg({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    const closeHandler = function () {
      $vm.showValue === true && ($vm.showValue = false)
    }

    const show = (msg, options) => {
      options = options || {}
      if (options.nativeFirst === true) {
        nativeFirst = true
      }
      if (nativeFirst) {
        // 优先使用原生
        nShow(msg, options)
      } else {
        if (typeof options === 'object') {
          // 弹窗标题
          if (options.title && !msg) {
            msg = options.title
            options.title = ''
          } else {
            options.title = ''
          }
          // 按钮文字
          options.buttonText = options.buttonText || '确定'
          // 遮罩动画
          options.maskTransition = options.maskTransition || 'vux-fade'
          // 弹窗主体动画
          options.dialogTransition = options.dialogTransition || 'vux-dialog'

          options.onShow = options.onShow || (() => {})
          options.onHide = options.onHide || (() => {})
          for (let i in options) {
            $vm[i] = options[i]
          }
        }
        // 内容，支持 html，和默认slot同样功能
        $vm.$el.querySelector('.weui_dialog_bd').innerHTML = msg
        $vm.$el.querySelector('.weui_dialog_ft').addEventListener('click', closeHandler, false)
        options.onShow && options.onShow($vm)
        $vm.showValue = true
      }
    }
    const hide = () => {
      if (nativeFirst) {
        // 优先使用原生
        nHide()
      } else {
        $vm.showValue = false
        $vm.onHide && $vm.onHide($vm)
      }
    }
    vue.mixin({
      created: function () {
        options.alert && delete options.alert
        options.alert = show
        options.alertClose && delete options.alertClose
        options.alertClose = hide
      }
    })
  }
}

export default plugin
