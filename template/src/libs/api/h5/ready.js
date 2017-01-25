import * as windows from './windows.js'

windows.onload(() => {
  // todo: 关闭权限层:登录层,貌似应该放到通用业务中去
  document.addEventListener('logined', function (e) {
    // window.$login && window.$login.close && window.$login.close()
  })
})
