<template>
  <div class="recruit">
    <div class="recruit-img"></div>
    <div class="recruit-content">
      <div class="recruit-content-item">
        <h5>徐州恒顺广场项目</h5>
      </div>
      <div class="recruit-content-item">
        <h5>南京广电总局项目</h5>
      </div>
      <div class="recruit-content-item">
        <h5>徐州人力资源中心项目</h5>
      </div>
      <div class="recruit-content-item">
        <h5>全椒县路灯项目</h5>
      </div>
    </div>
  </div>
</template>

<script>
import jobItem from "../components/recruit/recruit_list";
export default {
  components: {
    jobItem
  }
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
    //   opacity: 0.6;
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