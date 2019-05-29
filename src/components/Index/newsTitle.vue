<template>
  <div class="newstitle">
    <div class="newstitle-tit">
      <h4>新闻速递</h4>
      <span>
        <router-link to="/news">更多</router-link>
      </span>
    </div>
    <ul>
      <li v-for="item in list" :key="item._id"  @click="go_detail(item._id)">
        <img class="newstitle-img" width="100%" :src="item.IMG_MIN" alt>
        <div class="newstitle-content">
          <h6>{{item.TITLE}}</h6>
          <span>发布时间 : {{changeTime(item.createAt)}}</span>
          <span>{{item.INTRO}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import serviceApi from "../../api/axios";
import changeTime from '../../util/time_change'
export default {
  data() {
      this.changeTime=changeTime
    return {
      list: []
    };
  },
  methods: {
    async get_desc() {
      let {
        status,
        data: { data }
      } = await serviceApi.get("/news/getNews", {
        params: {
          key: 4,
          page: 1
        }
      });
      if (status == 200 && data.length > 0) {
        let res = data.slice(0, 3);
        this.list = res;
        // console.log(res);
      }
    },
    //跳转详情页
    go_detail(id){
        this.$router.push({name:'news_detail',query:{key:id}})
    }
  },
  mounted() {
    this.get_desc();
  }
};
</script>

<style lang="scss" scoped>
.newstitle {
  background: #f7f7f7;
  .newstitle-tit {
    padding: px2rem(5) px2rem(5) px2rem(5) px2rem(12);
    background: white !important;
    color: #ad8757;
    opacity: 0.7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ad8757;
    h4 {
      font-size: px2rem(12);
    }
    span {
      font-size: px2rem(12);
      a {
        color: #ad8757;
      }
    }
  }
  li {
    background: white;
    margin-bottom: px2rem(5);
    display: flex;
    box-sizing: border-box;
    padding: px2rem(3);
  }
  &-img {
    height: px2rem(60);
    overflow: hidden;
    width: 33%;
  }
  &-content {
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
      //   &:nth-child(3){
      //       margin-left: px2rem(12)
      //   }
    }
  }
}
</style>