// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 在 main.js 中引入 路由和状态管理配置
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

// import iView from 'iview';
import 'iview/dist/styles/iview.css';//引入样式
// Vue.use(iView);

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  
  components: { App },
  template: '<App/>'
})
