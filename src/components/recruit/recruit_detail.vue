<template>
  <!-- 招聘详情 -->
  <div class="news_detail">
    <div class="content_all">
      <div class="content_rec">
        <h2>{{recruit.title}}</h2>
        <span>发布时间：{{timeChange(recruit.createAt)}}</span>
        <div class="rec_cont">
          <h5>■ {{recruit.post}}</h5>
          <p>工作地点 : {{recruit.place}}</p>
          <p>薪资待遇 : {{recruit.money}}</p>
          <p>岗位要求 :</p>
          <ul>
            <li v-for="(item,index) in recruit.items" :key="index">{{item}}</li>
          </ul>
        </div>
        <h3>应聘者请将简历（注明应聘岗位) 投送到 : {{recruit.email}} &nbsp;电话 : {{recruit.phone}}</h3>
      </div>
    </div>
  </div>
</template>
<script>
import timeChange from "../../util/time_change.js";
import serviceApi from "../../api/axios";
export default {
  data() {
    this.timeChange = timeChange;
    return {
      recruit: {}
    };
  },
  methods: {
    async getRecruit(id) {
      let {
        status,
        data: { data }
      } = await serviceApi.get("/recruit/getRecruit", { params: { key: id } });
      if (status == 200 && data) {
        this.recruit = data[0];
      }
    }
    //获取面包屑内容
  },
  mounted() {
    let res = this.$route.params.detail;
    console.log(res);
    //如果页面单纯刷新阻断了父组件的传值,重新请求
    if (!res) {
      let id = localStorage.getItem("rec_detail_id");
      this.getRecruit(id);
    } else {
      //否则如果有值用之前的值
      this.recruit = res;
    }
  }
};
</script>

<style lang="scss" scoped>
.news_detail {
  .content_all {
    width: 100%;
    .content_rec {
      background: #fff;
      padding: px2rem(20);
      h2{
        font-size: px2rem(10);
      }
      span {
        font-size: px2rem(3);
      }
      .rec_cont {
        margin-top: px2rem(20);
        margin-left: px2rem(10);
        h5 {
          font-size: px2rem(6);
          margin-bottom: px2rem(10);
        }
        p {
          font-size: px2rem(5);
        }
        ul {
            margin-top: px2rem(8);
          li {
            margin-bottom: px2rem(6);
            margin-left: px2rem(8);
            font-size: px2rem(4.5);
          }
        }
      }
    }
    h3 {
      margin-top: px2rem(20);
      font-size: px2rem(6);
    }
  }
}
</style>
