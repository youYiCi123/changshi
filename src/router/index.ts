import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import News from '../views/News/news.vue'
import NewsList from '../views/News/NewsList.vue'
import NewsDetail from '../views/News/NewsDetail.vue'
import Product from '../views/product/Product.vue'
import ProductList from '../views/product/ProductList.vue'
import ProductDetial from '../views/product/ProductDetial.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/news',
    name: 'news',
    component: News,
    redirect: '/news/NewsList',
    children: [
      {
        path: 'NewsList',
        name: 'NewsList',
        component: NewsList,
      },
      {
        path: 'NewsDetail',
        name: 'NewsDetail',
        component: NewsDetail,
      },
    ]
  },
  {
    path: '/Solution',
    name: 'Solution',
    component: () => import('../views/TechnicalSolution/Solution.vue'),
  },
  {
    path: '/Serve',
    name: 'Serve',
    component: () => import('../views/TechnicalSolution/Serve.vue'),
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../views/Enterprise/Contact.vue'),
  },
  
  {
    path: '/Recruit',
    name: 'Recruit',
    component: () => import('../views/Enterprise/Recruit.vue'),
  },
  {
    path: '/Product',
    name: 'Product',
    component: Product,
    redirect: '/Product/ProductList',
    children: [
      {
        path: 'ProductList',
        name: 'ProductList',
        component: ProductList,
      },
      {
        path: 'ProductDetial',
        name: 'ProductDetial',
        component: ProductDetial,
      },
    ],
  },
  {
    path: '/AboutComponay',
    name: 'AboutComponay',
    component: () => import('../views/AboutUs/AboutComponay.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base:process.env.BASE_URL, //这个必配，是index.html所在的路径地址
  routes
})

export default router
