import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

//引入 iview
import iView from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(iView);

import './assets/gloable.scss'

import qs from 'qs';
import request from './utils/request'
Vue.prototype.$request = request
Vue.prototype.$qs = qs

Vue.prototype.$url = process.env.VUE_APP_URL;

import mitt from './utils/mitt'
Vue.prototype.$mitt = mitt

//// 路由拦截
// const whiteList = ['/task'];//不需要登录能访问的path
// router.beforeEach((to, from, next) => {
//   console.log('beforeEach');
//   // let userInfo = JSON.parse(sessionStorage.getItem('state'));//获取缓存看是否登录过
//   let state = sessionStorage.getItem('state');//获取缓存看是否登录过
//   if (whiteList.indexOf(to.path) < 0) {//访问了需要登录才能访问的页面
//     if (state === 'true') {//登录过来直接进去
//       next();
//     } else {
//       if (to.path == '/login') {
//         next();
//       } else {
//         next('/login');
//       }
//     }
//   } else {
//     next();
//   }
// });

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
