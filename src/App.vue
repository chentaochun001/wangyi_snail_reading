<template>
  <div id="app">
    <router-view></router-view>
    <!-- <TabBar></TabBar> -->
    <!-- <Home></Home> -->
    <!-- <Login></Login> -->
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Login from './components/Mine/Login.vue'
export default {
  name: 'App',
  components: {
    Home,
    Login
  }
}
</script>

<style>
@import url(//at.alicdn.com/t/font_674830_t6feqj49mgk138fr.css);
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
