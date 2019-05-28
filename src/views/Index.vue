<template>
  <div class="index">
    <!-- <headerBar class="header"></headerBar> -->
    <banner class="banner"></banner>
    <navBar></navBar>
    <div class="content">
        <!-- 公司公告 -->
      <notice class="notice"></notice> 
      <!-- 关于中迪 -->
      <aboutUs class="about"></aboutUs>
      <!-- 新闻模块 -->
      <newsTitle></newsTitle>
    </div>
    <!-- <footerBar class="footer"></footerBar> -->
  </div>
</template>

<script>
// import headerBar from "../layouts/header";
import banner from "../components/Index/banner";
import navBar from "../components/Index/navBar";
import notice from "../components/Index/notice";
import aboutUs from '../components/Index/aboutUs'
import newsTitle from '../components/Index/newsTitle'
// import footerBar from '../layouts/footer'

export default {
  components: {
    // headerBar,
    banner,
    navBar,
    notice,
    aboutUs,
    newsTitle,
    // footerBar
  }
};
</script>

<style lang="scss" scoped>
.index {
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999 !important;
  }
  .banner {
    margin-top: px2rem(36);
  }
  .content{
      background: rgb(247, 247, 247);
      padding: px2rem(8.5) px2rem(12.8);
    //   height: 300px;
      .notice{
          margin-bottom: px2rem(8.5) ;
      }
      .about{
          margin-bottom: px2rem(8.5) ;
      }
  }
  .footer{
      margin-top: px2rem(8.5) ;
  }
}
</style>