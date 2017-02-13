// http 请求

export default function (vue, api) {
  // 由于ESLint会检测没有定义的变量，因此需要这一个`global`注释声明IS_PRODUCTION是一个全局变量(当然在本例中并不是)来规避warning
  /* global IS_PRODUCTION:true */
  if (IS_PRODUCTION) {
    // 由于本脚手架并没有牵涉到HTTP请求，因此此处仅作为演示分离开发/生产环境之用。
    vue.config.devtools = false
    // vue.http.options.root = 'http://192.168.2.241:8003/'
  } else {
    vue.config.devtools = true
    // vue.http.options.root = 'http://192.168.2.241:8003/'
  }

  vue.filter('formatDate', api.formatDate)
  vue.filter('capitalize', api.capitalize)
  vue.filter('uppercase', api.uppercase)
  vue.filter('lowercase', api.lowercase)
  vue.filter('pluralize', api.pluralize)
  vue.filter('currency', api.currency)
  vue.filter('number', api.number)

  // vue.filter('debounce', api.debounce)
}
