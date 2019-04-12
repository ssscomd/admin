// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 在 main.js 中引入 路由和状态管理配置
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import 'iview/dist/styles/iview.css';//引入
import axios from 'axios';
import qs from 'qs';
Vue.prototype.$axios =axios;
Vue.prototype.$qs = qs;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
