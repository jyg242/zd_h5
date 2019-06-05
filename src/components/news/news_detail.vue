<template>
  <div class="recruit">
    <div class="recruit-img" :style="{backgroundImage:'url('+img+')'}"></div>
    <div class="recruit-content">
      <div class="content_news" v-if="isShow">
        <h5>{{news.TITLE}}</h5>
        <p>
          <span>作者：{{news.AUTH}}</span>
          <span>时间：{{timeChange(news.createAt)}}</span>
          <span>来源：{{news.FROM}}</span>
        </p>
        <div v-html="news.CONTENT" class="detail"></div>
      </div>
    </div>
  </div>
</template>

<script>
import time_change from "../../util/time_change";
import serviceApi from "../../api/axios";
export default {
  data() {
    this.timeChange = time_change;
    return {
        img:'http://192.168.10.144:8080/img/top_banner2.b92c07bd.jpg',
      news: [],
      isShow: false
    };
  },
  methods: {
    async get_detail(id) {
      let {
        status,
        data: { data }
      } = await serviceApi.get("/news/getNews_one", {
        params: {
          key: id
        }
      });
      if (status == 200 && data.length > 0) {
        // console.log(data);
        this.isShow = !this.isShow;
        this.news = data[0];
      }
    }
  },
  mounted() {
    let key = this.$route.query.key;
    this.get_detail(key);
    // console.log(key);
  }
};
</script>

<style lang="scss" scoped>
.recruit {
  margin-top: px2rem(36);
  &-img {
    width: 100%;
    height: px2rem(130);
    // background-image: url("http://192.168.10.57:8080/img/top_banner2.b92c07bd.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  &-content {
    background: white;
    padding: px2rem(10) px2rem(5) px2rem(40) px2rem(5);
    .content_news {
      h5 {
        font-size: px2rem(6.5);
        text-align: center;
      }
      p {
        margin-top: px2rem(4);
        margin-bottom: px2rem(25);
        span {
          font-size: px2rem(4);
          margin-right: px2rem(10);
        }
      }
    }
  }
}
</style>