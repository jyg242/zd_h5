<template>
  <div class="recruit">
    <div class="recruit-img"></div>
    <div class="recruit-content" >
      <div class="left duty-content" data-name='1' @click="goCs">
          <h6>慈善事业</h6>
      </div>
      <div class="right duty-content" data-name='2' @click="goGy">
          <h6>公益活动</h6>
      </div>
    </div>
    <p>发现成长的力量</p>
  </div>
</template>

<script>

export default {
    methods: {
       goCs(){
           this.$router.push({path:'/duty/detail',query:{title:'慈善事业'}})
       },
       goGy(){
           this.$router.push({path:'/duty/detail',query:{title:'公益事业'}})
       }   
    },
};
</script>

<style lang="scss" scoped>
.recruit {
  // box-sizing: border-box;
  margin-top: px2rem(36);
  padding-bottom: px2rem(16);
  background: #f7f7f7;

  &-img {
    width: 100%;
    height: px2rem(130);
    background-image: url("http://192.168.10.57:8080/img/top_banner4.7c3cdc12.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  &-content {
    margin-top: px2rem(20);
    // background: #f7f7f7;
    padding: px2rem(10) px2rem(5) px2rem(10) px2rem(5);
    display: flex;
    // border: 1px solid red;
    box-sizing: border-box;
    justify-content: space-around;
    align-items: center;
    .duty-content {
      width: 45%;
      height: px2rem(100);
    //   border: 1px solid red;
      box-sizing: border-box;
      background: white;
      border: 1px solid #c0c0c0;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      color: #f9f7f7;
      h6{
          text-align: center;
        //   line-height: px2rem(80);
        margin-top: px2rem(75);
        font-size: px2rem(12);
      }

    }
    .left{
        background-image: url('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=26099371,4049654860&fm=26&gp=0.jpg')
    }
    .right{
        background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558953718639&di=738ff632f81dbb59d818d90970dcdb35&imgtype=0&src=http%3A%2F%2Fcdn.huodongxing.com%2Ffile%2F20150723%2F111C7815D8A67E840BDDF11C469E2C07D5%2F30182033836242133.jpg')
    }
  }
  p {
    text-align: center;
    // background: #f7f7f7;
      position: relative;
      font-size: px2rem(12);
      color: #ad8757;
    //   padding: px2rem();
    &:before {
      content: '';
      display: inline-block;
      width: px2rem(80);
      height: 1px;
      background:  #ad8757;
      position: absolute;
      top: px2rem(7.5);
      left: px2rem(30);
    }
    &:after{
      content: '';
      display: inline-block;
      width: px2rem(80);
      height: 1px;
      background:  #ad8757;
      position: absolute;
       top: px2rem(7.5);
      right: px2rem(30);
    }
  }
}
</style>