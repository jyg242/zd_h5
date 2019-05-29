<template>
  <div>
    <van-swipe :autoplay="3000" class="carousel">
      <van-swipe-item class="carousel-item" v-for="(image, index) in images" :key="index">
        <img v-lazy="image.IMGURL">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import serviceApi from "../../api/axios";
export default {
  data() {
    return {
      images: [],
      images: [{IMGURL:'https://m.midea.com/dam/jcr:30f755d9-7aac-431e-9a62-c3379476a192/%E5%A4%B4%E5%9B%BE.jpg'},{IMGURL:'https://m.midea.com/dam/jcr:c433a6e8-7f7d-4940-89f2-26aacd72eb70/WechatIMG192.jpeg'}]
    };
  },
  methods: {
    async getBanner() {
      let {
        status,
        data: { data }
      } = await serviceApi.get("/banner/getImg");
      if (status == 200 && data) {
        // this.images = data;
        // console.log(data);
      }
    }
  },
  mounted() {
    this.getBanner();
  }
};
</script>

<style lang="scss" scoped>
.carousel {
      height: px2rem(206);

  &-item {
      height: px2rem(206);
    img {
        width: 100%;
      height: px2rem(206);
    }
  }
}
</style>