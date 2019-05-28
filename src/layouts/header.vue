<template>
  <!-- 顶部导航 -->
  <div class="header">
    <van-nav-bar title="中迪投资"  >
    </van-nav-bar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.van-nav-bar {
  height: px2rem(36) !important;
  line-height: px2rem(36) !important;
  background: #0193d8;
  opacity: .9;
  &__title {
    color: #fff;
    font-size: px2rem(18);
  }
  &__left,
  &__right {
    font-size: px2rem(14);
  }
  &__text{
    color: #ad8757;
  }
  .van-icon{
    color: #ad8757;
    font-size: px2rem(14) !important;
    

  }
  &.__arrow{
    font-size: px2rem(14) !important;
  }
}
</style>