import myMsg from './login.vue'

let $vm

const plugin = {
  install(vue, options) {
    const Msg = vue.extend(myMsg)

    if (!$vm) {
      $vm = new Msg({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    /**
     * 登录
     * @param {any} reload
     * @param {any} callback
     */
    const show = (reload, callback) => {
      /**
       * 回调：
       * 有些操作或请求会验证是否登录，未登录时会自动调用登录
       * 当登录成功后可以执行重试来源操作或其他的附加操作
       */
      // callback = callback || (() => {})
      // 是否
      // reload === undefined
      if (typeof reload === 'boolean') {
        callback = callback || (() => {})
      } else if (options.isFunction(reload)) {
        callback = reload
        reload = true
      } else {
        callback = () => {}
        reload = true
      }
      $vm.callback = callback
      $vm.reload = reload

      options.addMsgBack({
        name: 'login',
        index: 50,
        handle: function () {
          // options.log('login cancle')
          if ($vm.show === true) {
            cancle()
            return false
          }
          return true
        }
      })
      $vm.show = true
    }

    /**
     * 完成登录(登录成功)
     */
    const close = () => {
      if ($vm.show === true) {
        // 执行登录成功回调
        $vm.callback && $vm.callback()
        if ($vm.reload) {
          // 来源页面 登陆后 需要刷新
          options.refresh()
        }
        // 全局事件通知：已经登录
        options.fireAll('logined')
        // 登录完成后关闭
        hide()
      }
    }
    /**
     * 取消登录(未登录)
     */
    const cancle = () => {
      if ($vm.show === true) {
        // 取消登录,不执行回调
        if ($vm.reload) {
          // 来源页面 登陆后 需要刷新
          if (options.os.plus) {
            if (options.plusBack()) {
              // 关闭登录层
              hide()
            }
          } else {
            if (options.canHistoryBack() && window.history.length > 1) {
              window.history.back()
              // 关闭登录层
              hide()
            } else {
              // confirm
              options.confirm('取消登录会退出应用！', {
                title: '取消登录',
                confirmText: '不了，继续登录',
                cancelText: '是的，我要退出',
                onShow: () => {
                  // options.log('confirm show')
                },
                onHide: () => {
                  // options.log('confirm 关闭')
                },
                onConfirm: () => {
                  // options.log('不了，继续登录')
                },
                onCancel: () => {
                  // options.log('是的，我要退出')
                  window.close()
                }
              })
            }
          }
        } else {
          // 来源页面 登陆后 不需要 刷新：直接关闭登录层
          hide()
        }
      }
    }

    /**
     * 关闭登录层
     */
    const hide = () => {
      // 去掉login back action
      options.removeMsgBack('login', 50)
      if ($vm.show === true) {
        // 关闭登录层
        $vm.show = false
        // 重置属性
        $vm.reload = false
        $vm.callback = () => {}
      }
    }

    vue.mixin({
      created: function () {
        options.login && delete options.login
        options.login = show
        options.loginCancle && delete options.loginCancle
        options.loginCancle = cancle
        options.loginClose && delete options.loginClose
        options.loginClose = close
        // options.toastClose && delete options.toastClose
        // options.toastClose = hide
      }
    })
  }
}

export default plugin
