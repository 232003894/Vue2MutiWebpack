<template>
  <div id="app" style="height:100%;">
    <view-box ref="cBox">
      <x-header slot="header" @on-click-title="test">
        头部
      </x-header>
      <img src="../../assets/img/logo.png">
      <br>
      <div>
        <flexbox>
          <flexbox-item>
            <x-button type="warn" @click.native="testError">webError</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button type="primary" @click.native="testOpen">Open</x-button>
          </flexbox-item>
          <flexbox-item>
          </flexbox-item>
        </flexbox>
        登录测试
        <flexbox>
          <flexbox-item>
            <x-button type="primary" @click.native="testLogin">登录(刷新)</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button type="primary" @click.native="testLoginNoReload">登录</x-button>
          </flexbox-item>
          <flexbox-item>
          </flexbox-item>
        </flexbox>
        Toast-UI测试
        <flexbox>
          <flexbox-item>
            <x-button type="primary" @click.native="testToast(10000,false)">10秒</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button type="primary" @click.native="testToast(2000,false)">2秒</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button type="primary" @click.native="testToastClose(false)">toastClose</x-button>
          </flexbox-item>
        </flexbox>
        Toast-Native测试
        <flexbox>
          <flexbox-item>
            <x-button @click.native="testToast(10000,true)">long</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button @click.native="testToast(2000,true)">short</x-button>
          </flexbox-item>
          <flexbox-item>
          </flexbox-item>
        </flexbox>
        Alert测试
        <flexbox>
          <flexbox-item>
            <x-button type="primary" @click.native="testAlert(false)">Alert</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button type="primary" @click.native="testAlertClose(false)">alertClose</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button @click.native="testAlert(true)">Native</x-button>
          </flexbox-item>
        </flexbox>
        Confirm测试
        <flexbox>
          <flexbox-item>
            <x-button type="primary" @click.native="testConfirm(false)">Confirm</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button type="primary" @click.native="testConfirmClose(false)">confirmClose</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button @click.native="testConfirm(true)">Native</x-button>
          </flexbox-item>
        </flexbox>
        Loading测试
        <flexbox>
          <flexbox-item>
            <x-button type="primary" @click.native="testLoadingClose(false)">Loading</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button @click.native="testLoadingClose(true)">Native</x-button>
          </flexbox-item>
          <flexbox-item>
          </flexbox-item>
        </flexbox>
      </div>
      <p v-for="i in 40">{{i}}</p>
      <tabbar icon-class="vux-center" slot="bottom">
        <tabbar-item>
          <span slot="label">底部</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
  import {
    ViewBox,
    XHeader
  } from 'app'

  import {
    Flexbox,
    FlexboxItem,
    Tabbar,
    TabbarItem,
    XButton
  } from 'vux'

  export default {
    name: 'app',
    components: {
      ViewBox,
      XHeader,
      Flexbox,
      FlexboxItem,
      Tabbar,
      TabbarItem,
      XButton
    },
    mounted() {
      // console.log(JSON.stringify(window.common, null, 2))
      // $api.log($api.toastClose)
      $api.mounted(() => {
        $api.androidKeys()
      }, true)

      this.$refs.cBox.scrollTo(190)
    },
    methods: {
      testOpen() {
        $api.open('demo_setting')
        // setTimeout(() => {
        //   var wv = plus.webview.getWebviewById('demo_setting')
        //   wv && wv.hide()
        // }, 5000)
      },
      testLoadingClose(nativeFirst) {
        $api.loading('消息123', {
          nativeFirst: nativeFirst,
          onShow: () => {
            setTimeout(() => {
              $api.loadingClose()
            }, 10000)
            console.log('loading onShow')
          },
          onHide: () => {
            console.log('loading onHide')
          }
        })
      },
      testConfirm(nativeFirst) {
        $api.confirm('消息123', {
          title: '标题',
          nativeFirst: nativeFirst,
          confirmText: 'YES',
          cancelText: 'NO',
          onShow: () => {
            console.log('confirm onShow')
          },
          onHide: () => {
            console.log('confirm onHide')
          },
          onConfirm: () => {
            console.log('confirm 确定')
          },
          onCancel: () => {
            console.log('confirm 取消')
          }
        })
      },
      testConfirmClose(nativeFirst) {
        $api.confirm('消息123', {
          title: '标题',
          confirmText: 'YES',
          cancelText: 'NO',
          onShow: () => {
            setTimeout(() => {
              $api.confirmClose()
            }, 1000)
          },
          onHide: () => {
            console.log('confirm onHide')
          },
          onConfirm: () => {
            console.log('confirm 确定')
          },
          onCancel: () => {
            console.log('confirm 取消')
          }
        })
      },
      testAlert(nativeFirst) {
        $api.alert('消息123', {
          title: '标题',
          nativeFirst: nativeFirst,
          buttonText: '知道了',
          onShow: () => {
            console.log('alert onShow')
          },
          onHide: () => {
            console.log('alert onHide')
          }
        })
      },
      testAlertClose(nativeFirst) {
        $api.alert('消息123', {
          title: '标题',
          nativeFirst: nativeFirst,
          buttonText: '知道了',
          onShow: () => {
            setTimeout(() => {
              $api.alertClose()
            }, 1000)
          },
          onHide: () => {
            console.log('alert onHide')
          }
        })
      },
      testToast(time, nativeFirst) {
        $api.toast('消息123', {
          time: time,
          nativeFirst: nativeFirst,
          onShow: () => {
            console.log('toast alertonShow')
          },
          onHide: () => {
            console.log('toast onHide')
          }
        })
      },
      testToastClose(nativeFirst) {
        $api.toast('消息123', {
          time: 50000,
          nativeFirst: nativeFirst,
          onShow: () => {
            setTimeout(() => {
              $api.toastClose()
            }, 1000)
          },
          onHide: () => {
            console.log('toast onHide')
          }
        })
      },
      testLogin: function() {
        $api.login()
      },
      testLoginNoReload: function() {
        $api.login(false)
      },
      testError: function() {
        $api.webError()
      },
      test() {
        $api.toast('测试')
      }
    }
  }
  $api.mounted(() => {
    $api.log('test')
  }, true)
</script>

<style lang="less">

</style>