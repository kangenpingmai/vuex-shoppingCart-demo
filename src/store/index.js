// 定义vuex，并使用（插件形式）
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 引入store模块
import products from './modules/products'
import cart from './modules/cart'
// 创建全局vuex实例
// 直接暴露出一个函数
export default new Vuex.Store({
  modules: {
    products,
    cart
  }
})
