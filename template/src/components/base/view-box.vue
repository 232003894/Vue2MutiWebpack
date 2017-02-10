<template>
  <div class="weui_tab">
    <slot name="header"></slot>
    <div class="weui_tab_bd vux-fix-safari-overflow-scrolling" ref="viewBoxBody" id="vux_view_box_body" :style="{height:bodyHeight}">
      <div class="pro-webError">
        <div class="ui-error" @click="refresh">
          <i class="icon iconfont">&#xe6e7;</i>
          <h4>网络不给力</h4>
          <div class="ui-button">
            <button class="weui_btn weui_btn_default">重新加载</button>
          </div>
        </div>
      </div>
      <slot></slot>
    </div>
    <slot name="bottom"></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bodyHeight: (document.body.offsetHeight - this.padding) + 'px'
      }
    },
    mounted() {
      const self = this
      window.onresize = () => {
        return (() => {
          self.bodyHeight = (document.body.offsetHeight - this.padding) + 'px'
        })()
      }
    },
    props: {
      // 头部底部的总高度
      'padding': {
        type: Number,
        default: 101
      }
    },
    methods: {
      refresh() {
        $api.refresh()
      },
      scrollTo(top) {
        this.$refs.viewBoxBody.scrollTop = top
      },
      getScrollTop() {
        return this.$refs.viewBoxBody.scrollTop
      },
      getScrollBody() {
        return this.$refs.viewBoxBody
      },
      setBodyHeight(val) {
        this.getScrollBody().style.height = this.bodyHeight
      }
    },
    watch: {
      bodyHeight(val) {
        if (!this.timer) {
          this.bodyHeight = val
          this.timer = true
          let self = this
          setTimeout(function() {
            self.setBodyHeight(self.bodyHeight)
            self.timer = false
          }, 400)
        }
      }
    }
  }
</script>
<style scoped>
  .weui_tab_bd {
    padding-bottom: 0;
  }
</style>

<style lang="less">
  @import '~vux/src/styles/weui/widget/weui_tab/weui_tab_tabbar';
  html,
  body {
    overflow-y: hidden;
  }
  
  // webError
  .pro-webError {
    width: 100%;
    height: 100%;
    background-color: white;
    position: fixed;
    z-index: 1;
    display: none;
    .ui-error {
      text-align: center;
      margin-top: 50%;
      margin-top: 25vh;
      .iconfont {
        font-size: 50px;
        color: #949494;
      }
      .ui-button {
        width: 90px;
        padding-top: 15px;
        margin: 0 auto;
        .weui_btn {
          font-size: 14px;
        }
      }
    }
  }
  
  .pro-webError.active {
    display: block;
  }
</style>