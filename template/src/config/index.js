import * as _api from '../libs/api'
if (!window.$api) {
  window.$api = _api
}
import common from './common'
if (!window.common) {
  window.common = common
}

export default function (vue) {
  console.log('初始化')
}
