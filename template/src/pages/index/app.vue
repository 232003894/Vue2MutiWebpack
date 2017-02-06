<template>
  <div id="app" style="height:100%;">
    <view-box ref="viewBox">
      <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">头部</x-header>
      <img src="../../assets/img/logo.png">
      <hello></hello>
      <i class="icon iconfont icon-homeon"></i>
      <hello></hello>
      <tabbar icon-class="vux-center" slot="bottom">
        <tabbar-item>
          <span slot="label">底部</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
  import Hello from '../../components/Hello'
  import {
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem
  } from 'vux'

  export default {
    name: 'app',
    components: {
      Hello,
      ViewBox,
      XHeader,
      Tabbar,
      TabbarItem
    },
    mounted() {
      // console.log(JSON.stringify(window.common, null, 2))
      window.$api.log(window.$api.toastClose)
      window.$api.alertClose()

      window.$api.mounted(() => {
        window.$api.androidKeys()
      })
    }
  }
  window.$api.mounted(() => {
    window.$api.log('test')
  })
</script>

<style lang="less">

</style>