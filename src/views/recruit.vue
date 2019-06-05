<template>
  <div class="recruit">
    <div class="recruit-img" :style="{backgroundImage:'url('+img+')'}"></div>
    <div class="recruit-content">
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
data() {
    return {
        img: 'http://192.168.10.144:8080/img/top_banner5.076bf276.jpg'
    }
},
};
</script>

<style lang="scss" scoped>
.recruit {
  margin-top: px2rem(36);
  &-img {
    width: 100%;
    height: px2rem(130);
    // background-image: url("http://192.168.10.57:8080/img/top_banner5.076bf276.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  &-content {
    // min-height: px2rem(380);
    // margin-bottom: px2rem(30);
    background: #f7f7f7;
    padding: px2rem(10) px2rem(5) px2rem(40) px2rem(5);
    // padding-bottom: px2rem(10);

  }
}
</style>