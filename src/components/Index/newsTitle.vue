<template>
  <div class="newstitle">
    <div class="newstitle-tit">
      <h4>新闻速递</h4>
      <span>更多</span>
    </div>
    <ul>
      <li>
        <img
          class="newstitle-img"
          width="100%"
          src="//cms-bucket.ws.126.net/2019/05/24/05c340c395cc4463a6590d5050dae12f.png?imageView&thumbnail=234y146&quality=45&interlace=1&enlarge=1&type=webp"
          alt
        >
        <div class="newstitle-content">
          <h6>第十六届省人大会议今日召开</h6>
          <span>发布时间 : 2018-06-12</span>
          <span>鹅鹅鹅,曲项向天歌.白毛浮绿水,红掌拨清波.</span>
        </div>
      </li>
      <li>
        <img
          class="newstitle-img"
          width="100%"
          src="//cms-bucket.ws.126.net/2019/05/24/05c340c395cc4463a6590d5050dae12f.png?imageView&thumbnail=234y146&quality=45&interlace=1&enlarge=1&type=webp"
          alt
        >
        <div class="newstitle-content">
          <h6>第十六届省人大会议今日召开</h6>
          <span>发布时间 : 2018-06-12</span>
          <span>鹅鹅鹅,曲项向天歌.白毛浮绿水,红掌拨清波.</span>
        </div>
      </li>
      <li>
        <img
          class="newstitle-img"
          width="100%"
          src="//cms-bucket.ws.126.net/2019/05/24/05c340c395cc4463a6590d5050dae12f.png?imageView&thumbnail=234y146&quality=45&interlace=1&enlarge=1&type=webp"
          alt
        >
        <div class="newstitle-content">
          <h6>第十六届省人大会议今日召开</h6>
          <span>发布时间 : 2018-06-12</span>
          <span>鹅鹅鹅,曲项向天歌.白毛浮绿水,红掌拨清波.</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
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
    h4{
        font-size: px2rem(12);
    }
    span{
        font-size: px2rem(12);
    }
  }
  
  li {
    background: white;
    margin-bottom: px2rem(3);
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