<template>
  <div class="recruit">
    <div class="recruit-img"></div>
    <div class="recruit-content">
      <div class="recruit-content-item" v-for="item in list" :key="item._id" @click="$router.push({name:'distribution_detail',query:{id:item._id}})">
        <h5>{{item.title}}</h5>
      </div>
      
    </div>
  </div>
</template>

<script>
import serviceApi from '../api/axios'
export default {
    data() {
        return {
            list: []
        }
    },
    methods: {
        async getTitle() {
            let {status,data:{data}}=await serviceApi.get('/industry/getIndustry')
            if(status==200&&data.length>0){
                // console.log(data)
                this.list=data      
            }
        }
    },
    mounted () {
        this.getTitle();
    },
};
</script>

<style lang="scss" scoped>
.recruit {
  margin-top: px2rem(36);
  &-img {
    width: 100%;
    height: px2rem(130);
    background-image: url("http://192.168.10.57:8080/img/top_banner.0d697682.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  &-content {
    background: #f7f7f7;
    padding: px2rem(40) px2rem(5) px2rem(40) px2rem(5);
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    &-item {
      width: 45%;
      height: 10vh;
      margin-bottom: px2rem(5);
      border-radius: 4%;
      background: white;
      h5 {
        font-size: px2rem(10);
        text-align: center;
        line-height: 10vh;
        color: #ad8757;
      }
    }
  }
}
</style>