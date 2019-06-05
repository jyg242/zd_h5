<template>
  <div class="recruit">
    <div class="recruit-img" :style="{backgroundImage:'url('+img+')'}"></div>
    <div class="recruit-content">
      <div class="recruit-content-desc">
        <h3>北京中迪投资股份有限公司</h3>
        <p>地址 : 北京市东城区建国门内大街19号</p>
        <p>电话 : 010-88888888</p>
        <p>邮箱 : 297138663@qq.com</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: "http://192.168.10.144:8080/img/top_banner5.076bf276.jpg"
    };
  }
};
</script>

<style lang="scss" scoped>
.recruit {
  margin-top: px2rem(36);
  &-img {
    width: 100%;
    height: px2rem(130);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  &-content {
    background: #f7f7f7;
    padding: px2rem(10) px2rem(5) px2rem(40) px2rem(5);
    &-desc {
      background: white;
      padding: px2rem(10) px2rem(10) px2rem(25) px2rem(10);
      h3 {
        font-size: px2rem(16);
        margin-bottom: px2rem(15);
      }
      p {
        font-size: px2rem(9);
        color: #666;
        margin-bottom: px2rem(5);
      }
    }
  }
}
</style>