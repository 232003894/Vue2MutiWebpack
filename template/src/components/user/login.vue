<template>
  <div id="app" style="height:100%;">
    <view-box ref="viewBox">
      <x-header slot="header" :left-options="{showBack:true,preventGoBack:true,backText:'取消'}" @on-click-back="back()" style="width:100%;position:absolute;left:0;top:0;z-index:100;">登录</x-header>
      <br>
      <group>
        <x-input title="账号">
          <span slot=right>fd</span>
        </x-input>
        <x-input title="密码" type="password">
          <span slot=right>fd</span>
        </x-input>
      </group>
      <flexbox>
        <flexbox-item>
          <x-button type="default" @click.native="testCancle">取消登录</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="primary" @click.native="testClose">完成登录</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="warn" @click.native="testError">webError</x-button>
        </flexbox-item>
      </flexbox>
    </view-box>
  </div>
</template>

<script>
  import {
    XInput,
    ViewBox,
    XHeader
  } from 'app'
  import {
    Group,
    Flexbox,
    FlexboxItem,
    XButton
  } from 'vux'

  export default {
    components: {
      XInput,
      Group,
      Flexbox,
      FlexboxItem,
      ViewBox,
      XHeader,
      XButton
    },
    mounted() {},
    methods: {
      testClose: function() {
        $api.loginClose()
      },
      testCancle: function() {
        $api.loginCancle()
      },
      testError: function() {
        $api.webError()
      },
      back() {
        // 关闭login,也就是取消登录
        $api.loginCancle()
      }
    }
  }
</script>

<style lang="less">

</style>