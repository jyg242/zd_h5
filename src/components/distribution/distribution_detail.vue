<template>
  <div class="recruit">
    <div class="recruit-img" :style="{backgroundImage:'url('+img+')'}"></div>
    <div class="recruit-content">
      <div v-html="res"></div>
    </div>
  </div>
</template>

<script>
import serviceApi from "../../api/axios";
export default {
  data() {
    return {
      res: "",
      img: "http://192.168.10.144:8080/img/top_banner.0d697682.jpg"
    };
  },
  methods: {
    async getDesc(id) {
      let {
        status,
        data: { data }
      } = await serviceApi.get("/industry/getIndustry", {
        params: {
          key: id
        }
      });
      if (status == 200 && data.length > 0) {
        this.res = data[0].content;
      }
    }
  },
  mounted() {
    let id = this.$route.query.id;
    this.getDesc(id);
  }
};
</script>

<style lang="scss" scoped>
.recruit {
  margin-top: px2rem(36);
  &-img {
    width: 100%;
    height: px2rem(130);
    // background-image: url("http://192.168.10.57:8080/img/top_banner.0d697682.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  &-content {
    background: white;
    padding: px2rem(30) px2rem(5) px2rem(40) px2rem(5);
  }
}
</style>