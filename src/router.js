import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { //主页
      path: '/',
      name: 'index',
      component: Index
    },
    {//招聘页
      path: '/recruit',
      name: 'recruit',
      component: () => import('./views/recruit.vue'),
      children: [{
        path: '/recruit/recruit_list',
        name: 'recruit_list',
        component: () => import('./components/recruit/recruit_list.vue')
      }, {
        path: '/recruit/recruit_detail',
        name: 'recruit_detail',
        component: () => import('./components/recruit/recruit_detail.vue')
      }]
    }, {//联系我们
      path: '/contact',
      name: 'contact',
      component: () => import('./views/contact.vue'),
    }, {//免责声明
      path: '/disclaimer',
      name: 'disclaimer',
      component: () => import('./views/disclaimer.vue'),
    }, {//社会责任
      path: '/duty',
      name: 'duty',
      component: () => import('./views/duty.vue'),
    }, {//社会责任详细
      path: '/duty/detail',
      name: 'duty_detail',
      component: () => import('./components/duty/duty_detail.vue'),
    }, {//产业布局
      path: '/distribution',
      name: 'distribution',
      component: () => import('./views/distribution.vue'),
    }, {//产业详细
      path: '/distribution/detail',
      name: 'distribution_detail',
      component: () => import('./components/distribution/distribution_detail.vue'),
    }, {//新闻中心
      path: '/news',
      name: 'news',
      meta: { keepAlive: true },
      component: () => import('./views/news.vue')
    }, {//新闻详情
      path: '/news_detail',
      name: 'news_detail',
      component: () => import('./components/news/news_detail.vue')
    }

  ]
})
export default router
