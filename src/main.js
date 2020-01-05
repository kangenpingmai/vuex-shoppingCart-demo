import Vue from 'vue'
import App from './App.vue'
// 引入store
import store from './store/'

Vue.config.productionTip = false

new Vue({
  // 全局定义store，类似router
  store,
  render: h => h(App)
}).$mount('#app')
