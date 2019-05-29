<template>
  <div >
    <van-swipe 
      :autoplay="3000"
      vertical
      class="notice-content"
      :show-indicators="isShow"

    >
      <van-swipe-item v-for="item in res" :key="item._id" @click="$router.push({path:'/news_detail',query:{key:item._id}})">🔈 {{cutLong(item.TITLE,23)}}</van-swipe-item>   
    </van-swipe>
  </div>
</template>

<script>
import serviceApi from '../../api/axios'
import cutLong from '../../util/cut_long'
export default {
  data() {
      this.cutLong=cutLong
    return {
      isShow: false,
      res:[]
    };
  },
    methods: {
        async getNotice() {
            let {status,data:{data}}=await serviceApi.get('/news/getNews',{params:{
                key:3
            }})
            if(status==200&&data.length>0){
                console.log(data)
                this.res=data
            }
        }
    },
    mounted () {
        this.getNotice();
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