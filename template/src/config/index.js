import * as _api from '../libs/api'
if (!window.$api) {
  window.$api = _api
}
import common from './common'
if (!window.common) {
  window.common = common
}

import ToastPlugin from '../plugin/toast'
import AlertPlugin from '../plugin/alert'
import ConfirmPlugin from '../plugin/confirm'
import LoadingPlugin from '../plugin/loading'
import LoginPlugin from '../plugin/login'

export default function (Vue) {
  // console.log('初始化')
  Vue.use(ToastPlugin, window.$api)
  Vue.use(AlertPlugin, window.$api)
  Vue.use(ConfirmPlugin, window.$api)
  Vue.use(LoadingPlugin, window.$api)
  Vue.use(LoginPlugin, window.$api)
}
