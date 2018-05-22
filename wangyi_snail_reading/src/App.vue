<template>
  <div id="app">
    <router-view/>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from '@/components/common/TabBar'
export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style>
@import url(//at.alicdn.com/t/font_674830_st92fp1qjp0ysyvi.css);
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
}
</style>
