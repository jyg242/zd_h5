<template>
  <div class="navbar">
    <ul>
      <router-link to='/news'>
        <li>
          <i class="navbar-news"></i>
          <span>新闻中心</span>
        </li>
      </router-link>
      <router-link to='/distribution'>
        <li>
          <i class="navbar-distribution"></i>
          <span>产业布局</span>
        </li>
      </router-link>
      <router-link to="/duty">
        <li>
          <i class="navbar-duty"></i>
          <span>社会责任</span>
        </li>
      </router-link>
      <router-link to="/recruit/recruit_list">
        <li>
          <i class="navbar-join"></i>
          <span>人才招聘</span>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #fff;
  width: 100%;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: px2rem(12);
    padding: px2rem(5) 0;
    li {
      flex-basis: 20%;
      border-radius: 20%;
      display: flex;
      flex-direction: column;
      text-align: center;
      height: px2rem(46);
      padding: px2rem(3) px2rem(3);
      justify-content: space-around;
      align-items: center;
      i {
        width: px2rem(23);
        height: px2rem(21);
        margin-bottom: px2rem(5);
        background-size: 100% 100%;
        background-repeat: repeat;
      }
      .navbar-news {
        background-image: url("https://m.midea.com/dam/jcr:380b84d7-7776-4888-9165-d27db205b443/%E5%93%81%E7%89%8C.png");
      }
      .navbar-distribution {
        background-image: url("https://m.midea.com/dam/jcr:f2d6bf95-fc10-4b9c-a5f1-60407c9d7acd/%E6%9C%8D%E5%8A%A1.png");
      }
      .navbar-duty {
        background-image: url("https://m.midea.com/dam/jcr:df12d406-4a23-4b63-89a4-c5ab237afc7f/%E4%BC%81%E4%B8%9A.png");
      }
      .navbar-join {
        background-image: url("https://m.midea.com/dam/jcr:b804df18-69d2-42f8-a16b-2d45f6e6b33d/%E5%95%86%E5%9F%8E.png");
      }
    }
  }
}
a {
  color: #666;
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>