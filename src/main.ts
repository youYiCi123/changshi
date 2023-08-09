import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import 'animate.css'
import '@/styles/index.scss' // global css
import 'fullpage.js/vendors/scrolloverflow';
import '@/iconfont/iconfont.css'
import VueFullPage from 'vue-fullpage.js';
import animated from 'wowjs/css/libs/animate.css'
import '@/assets/font/font.scss';
//这里需要将样式用起来，
Vue.use(animated)
Vue.use(ElementUI, { locale })
// import jquery from "jquery";
// Vue.prototype.$= jquery;
Vue.use(VueFullPage)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
