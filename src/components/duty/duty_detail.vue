<template>
  <div class="recruit">
    <div class="recruit-img" :style="{backgroundImage:'url('+img+')'}"></div>
    <div class="recruit-content">
      <div class="recruit-content-desc">
        <div v-html="res"></div>
      </div>
    </div>
  </div>
</template>

<script>
import serviceApi from "../../api/axios";
export default {
  data() {
    return {
      res: "",
      img:'http://192.168.10.144:8080/img/top_banner4.7c3cdc12.jpg'
    };
  },
  methods: {
    async getDesc(key) {
      let {
        status,
        data: { data }
      } = await serviceApi.get("/duty/getDutyH5", {
        params: {
          key: key
        }
      });
      if (status == 200 && data.length > 0) {
        // console.log(data);
        this.res = data[0].content;
      }
    }
  },
  mounted() {
    let key = this.$route.query.title;
    // console.log(key)
    this.getDesc(key);
  }
};
</script>

<style lang="scss" scoped>
.recruit {
  margin-top: px2rem(36);
  &-img {
    width: 100%;
    height: px2rem(130);
    // background-image: url("http://192.168.10.57:8080/img/top_banner4.7c3cdc12.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  &-content {
    background: white;
    // background: #f7f7f7;
    padding: px2rem(30) px2rem(5) px2rem(40) px2rem(5);
  }
}
</style>