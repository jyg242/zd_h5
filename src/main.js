import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/hotecss/hotcss' //rem
import './assets/css/reset.css' //重置样式
import './assets/css/style.css' //矢量图

Vue.config.productionTip = false
import {Button, NavBar,icon,Swipe, SwipeItem,Lazyload,NoticeBar,Card,Row, Col } from 'vant'
Vue.use(Button).use(NavBar).use(icon).use(Swipe).use(SwipeItem).use(Lazyload).use(NoticeBar).use(Card).use(Row).use(Col)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
