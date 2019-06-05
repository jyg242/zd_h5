<template>
  <div class="recruit">
    <div class="recruit-img" :style="{backgroundImage:'url('+img+')'}"></div>
    <div class="recruit-content">
      <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          class="fontColor_a"
        >
          <div class="list-item" v-for="item in list" :key="item._id" @click="go_detail(item._id)">
            <img class="newstitle-img" width="100%" :src="item.IMG_MIN" alt>
            <div class="newstitle-content">
              <h6>{{item.TITLE}}</h6>
              <span>日期 : {{time_change(item.createAt)}}</span>
              <span>{{item.INTRO}}</span>
            </div>
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import serviceApi from "../api/axios";
import jobItem from "../components/recruit/recruit_list";
import time_change from "../util/time_change";
export default {
  components: {
    jobItem
  },
  data() {
    this.time_change = time_change;
    return {
      img: "http://192.168.10.144:8080/img/top_banner2.b92c07bd.jpg",
      list: [], //数据
      loading: false,
      finished: false, //上拉加载是否有数据
      isRefresh: false, //下拉刷新
      page: 1, //列表页数
      timer: null //节流
    };
  },
  methods: {
    //上拉加载
    onLoad() {
      if (!this.timer) {
        this.timer = setTimeout(() => {
          this.getNewsDesc();
          this.timer = null;
        }, 500);
      }
    },
    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.isRefresh = false;
        this.finished = false;
        this.list = [];
        this.page = 1;
        this.onLoad();
      }, 500);
    },
    //获取新闻列表
    async getNewsDesc() {
      let {
        status,
        data: { data }
      } = await serviceApi.get("/news/getNews", {
        params: {
          key: 4,
          page: this.page
        }
      });
      if (status == 200) {
        if (data.length > 0) {
          this.page++;
          this.list = this.list.concat(data);
        } else {
          //没有数据了
          this.finished = true;
        }
        this.loading = false;
      }
    },
    //跳转详情页
    go_detail(id) {
      this.$router.push({ name: "news_detail", query: { key: id } });
    }
  }
  // mounted() {
  //   this.getNewsDesc();
  // }
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
    background: #f7f7f7;
    padding: px2rem(10) px2rem(5) px2rem(40) px2rem(5);
    .list-item {
      background: white;
      margin-bottom: px2rem(5);
      display: flex;
      box-sizing: border-box;
      padding: px2rem(3);
      .newstitle-img {
        height: px2rem(60);
        overflow: hidden;
        width: 33%;
      }
      .newstitle-content {
        color: #666;
        width: 67%;
        height: px2rem(60);
        padding-left: px2rem(3);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h6 {
          font-size: px2rem(12);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        p {
          font-size: px2rem(14);
        }
        span {
          font-size: px2rem(10);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>