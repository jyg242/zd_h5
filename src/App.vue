<template>
  <div id="app">
    <headerBar class="header"></headerBar>
    <keep-alive>
    <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
    <footerBar class="footer"></footerBar>
  </div>
</template>
<script>
import headerBar from "./layouts/header";
import footerBar from "./layouts/footer";
export default {
  components: {
    headerBar,
    footerBar
  }
};
</script>
<style lang="scss">
#app {
  font-family: "PingFang", Helvetica, Arial, Microsoft YaHei, Simsun, sans-serif;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999 !important;
}
.footer {
  margin-top: px2rem(8.5);
}

a {
  color: #666;
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>
