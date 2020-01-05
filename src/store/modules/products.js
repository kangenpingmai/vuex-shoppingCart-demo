import shop from '@/api/data'

const state = {
  all: []
}
// actions异步处理的请求方法,将方法传给mutations去commit
const actions = {
  async getAllproducts({ commit }) {
    
    let products = await shop()
    // actions用commit触发mutations的setProducts方法，并传入参数
    commit('setProducts', products)
  }
}
//mutations定义store的方法
const mutations = {
  // 将数据products定义到全局状态state上
  setProducts (state, products) {
    state.all = products
  },

  update (state, { id }) {
    let product = state.all.find( product => product.id === id)
    product.inventory--
  }
}

export default {
  // true定义命名空间
  namespaced: true,
  // vuex的选项 还有getter
  state,
  actions,
  mutations
}