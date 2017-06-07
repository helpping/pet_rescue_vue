import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import News from '@/components/News'
import NewsDetail from '@/components/NewsDetail'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'Hello',
        component: Index
      },
      {
        path: '/news/',
        name: 'News',
        component: News
      },
      {
        path: '/news-detail/:news_id',
        name: 'NewsDetail',
        component: NewsDetail
      },
    ],


})
