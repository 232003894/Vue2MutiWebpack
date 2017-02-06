import myMsg from 'vux/src/components/confirm'

let $vm
let hasWatch = false
let nShow
let nHide
// 是否优先使用原生的,默认值false
let nativeFirst = false

const plugin = {
  install(vue, options) {
    const Msg = vue.extend(myMsg)

    if (!nShow) {
      nShow = options.confirm
    }
    if (!nHide) {
      nHide = options.confirmClose
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
          // 内容，支持 html，和默认slot同样功能
          options.content = msg
          // 确认按钮文字
          options.confirmText = options.confirmText || '确认'
          // 取消按钮文字
          options.cancelText = options.cancelText || '取消'
          // 遮罩动画
          options.maskTransition = options.maskTransition || 'vux-fade'
          // 弹窗主体动画
          options.dialogTransition = options.dialogTransition || 'vux-dialog'
          options.onShow = options.onShow || (() => {})
          options.onHide = options.onHide || (() => {})
          options.onCancel = options.onCancel || (() => {})
          options.onConfirm = options.onConfirm || (() => {})
          for (let i in options) {
            $vm[i] = options[i]
          }
        }
        options.onShow && options.onShow()
        if (!hasWatch) {
          $vm.$watch('showValue', (val) => {
            if (!val && options && options.onHide) {
              options.onHide()
            }
          })
          $vm.$on('on-cancel', () => {
            options && options.onCancel && options.onCancel()
            $vm.showValue = false
          })
          $vm.$on('on-confirm', () => {
            options && options.onConfirm && options.onConfirm()
            $vm.showValue = false
          })
          hasWatch = true
          $vm.$el.querySelector('.weui_dialog_ft').addEventListener('click', closeHandler, false)
        }
        $vm.showValue = true
      }
    }
    const hide = () => {
      if (nativeFirst) {
        // 优先使用原生
        nHide()
      } else {
        $vm.showValue = false
      }
    }
    vue.mixin({
      created: function () {
        options.confirm && delete options.confirm
        options.confirm = show
        options.confirmClose && delete options.confirmClose
        options.confirmClose = hide
      }
    })
  }
}

export default plugin
