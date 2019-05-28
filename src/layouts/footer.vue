<template>
  <div class="footer">
    <div class="footer-item">
      <i class="iconfont">&#xe626;</i>

      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/contact">联系我们</router-link></li>
        <li><router-link to="/disclaimer">免责声明</router-link></li>
      </ul>
    </div>
    <div class="footer-copyright">
      <p>Copyright ©1968-2019</p>
      <p>美的集团股份有限公司 粤ICP备09215446号</p>
      <p>粤公网安备44060602000243号</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  color: #333;
  font-size: px2rem(10);
  .footer-item {
    text-align: center;
    margin-bottom: px2rem(10);
  }
  ul {
    display: flex;
    justify-content: space-around;
    margin-top: px2rem(20);
  }
  i {
    font-size: px2rem(25);
  }
  .footer-copyright {
    padding: px2rem(12) 0 px2rem(12) 0;
    border-top: 1px solid #ad8757;
    text-align: center;
    p {
      line-height: px2rem(19);
    }
  }
}
</style>