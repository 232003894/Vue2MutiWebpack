<template>
  <div id="app">
    <img src="../../assets/logo.png">
    <hello></hello>
    <i class="icon iconfont icon-homeon"></i>
  </div>
</template>

<script>
  import Hello from '../../components/Hello'

  export default {
    name: 'app',
    components: {
      Hello
    },
    mounted() {
      console.log(JSON.stringify(window.common, null, 2))
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>