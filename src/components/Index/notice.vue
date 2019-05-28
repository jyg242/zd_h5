<template>
  <div >
    <van-swipe 
      :autoplay="3000"
      vertical
      class="notice-content"
      :show-indicators="isShow"

    >
      <van-swipe-item>🔈 热烈欢迎市领导莅临指导</van-swipe-item>
      <van-swipe-item>🔈 关于庆国庆文艺汇演的倡议书</van-swipe-item>
      
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },

};
</script>

<style lang="scss" scoped>
.notice-content {
  height: px2rem(33);
  background: white;
  line-height: px2rem(33);
  padding-left: px2rem(12);
  font-size: px2rem(12);
  color: #666;
}
</style>