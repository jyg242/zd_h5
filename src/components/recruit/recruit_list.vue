<template>
  <div>
    <div>
      <ul>
        <li v-for="item in res" :key="item._id" class="recuit-item">
          <span class="title">
            <h4 @click="go(item,item._id)">{{item.title}}</h4>
            <p>发布时间 : {{timeChange(item.createAt)}}</p>
            <p>工作地点: {{item.place}} &nbsp;&nbsp; 岗位要求：1.{{item.items[0]}} &nbsp;&nbsp;2.{{item.items[1]}}</p>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import serviceApi from "../../api/axios";
import timeChange from "../../util/time_change.js";

export default {
  data() {
    this.timeChange = timeChange;

    return {
      res: {}
    };
  },
  methods: {
    go(item, id) {
      // console.log(id);
      this.$router.push({ name: "recruit_detail", params: { detail: item } });
      localStorage.setItem("rec_detail_id", id);
    },
    async getRecruit() {
      let {
        status,
        data: { data }
      } = await serviceApi.get("/recruit/getRecruit");
      if (status == 200 && data) {
        this.res = data.reverse();
      }
    }
  },
  mounted() {
    this.getRecruit();
  }
};
</script>

<style lang="scss" scoped>
.recuit-item {
  width: 100%;
  height: px2rem(80);
  background: white;
  overflow: hidden;
  padding: px2rem(5) px2rem(8);
  box-sizing: border-box;
  margin-top: px2rem(5);
  color: #333;
  h4 {
    font-size: px2rem(12);
  }
  p {
    font-size: px2rem(10);
    margin-top: px2rem(5);
    &:nth-child(3) {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
  }
}
</style>