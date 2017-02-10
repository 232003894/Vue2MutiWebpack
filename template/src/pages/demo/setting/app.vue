<template>
  <div id="app" style="height:100%;">
    <view-box ref="cBox">
      <img src="../../../assets/img/logo.png">
      <flexbox>
        <flexbox-item>
          <x-button type="primary" @click.native="testLogin">登录(刷新)</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="primary" @click.native="testLoginNoReload">登录</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="warn" @click.native="testError">webError</x-button>
        </flexbox-item>
      </flexbox>
      窗口
      <flexbox>
        <flexbox-item>
          <x-button type="primary" @click.native="home">home</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="primary" @click.native="hide">hide</x-button>
        </flexbox-item>
        <flexbox-item>
        </flexbox-item>
      </flexbox>
      <p v-for="i in 100">\{{i}}</p>
  </div>
  </view-box>
</template>

<script>
  import {
    ViewBox
  } from 'app'
  import {
    Flexbox,
    FlexboxItem,
    XButton
  } from 'vux'

  export default {
    name: 'app',
    components: {
      ViewBox,
      Flexbox,
      FlexboxItem,
      XButton
    },
    mounted() {
      $api.mounted(() => {
        $api.androidKeys()
      }, true)
    },
    methods: {
      home() {
        $api.open(window.plus.runtime.appid)
      },
      hide() {
        var wv = plus.webview.getWebviewById('demo_setting')
        wv && wv.hide()
      },
      testLogin: function() {
        $api.login()
      },
      testLoginNoReload: function() {
        $api.login(false)
      },
      testError: function() {
        $api.webError()
      }
    }
  }
</script>

<style>

</style>