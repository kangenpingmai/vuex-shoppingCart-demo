const state = {
  items: []
}
// items的数据形式
// [
//   {
//     id: 1,
//     quantity: 12
//   },
//   {
//     id: 2,
//     quantity: 12
//   }
// ]


// getters设置全局的属性和方法，供多个组件使用 getters中默认
//系统参数state（本模块的额数据）,getters（下面的函数参数可以传递）, rootState（根store）
//
const getters = {
  // 计算属性
  // map映射数据的格式
  beautifulItems (state, getters, rootState) {
    return state.items.map((item, index) => {
      //find是数组的方法
      let { title, price } = rootState.products.all.find(product => product.id === item.id)
      
      return {
        title,
        price,  
        quantity: item.quantity
      }
    })
  },

  totalPrice(state, getters) {
    // reduce归并函数，第二个参数表示从0开始合并
    return getters.beautifulItems.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

const mutations = {
  // state为store的选项参数
  push (state, item) {
    state.items.push(item)
  },
  update (state, item) {
    item.quantity++
  }
}

// 由外部product组件dispatch触发actions中
const actions = {
  // 解构参数$store中的属性(本组件的$store) { commit, state } 就是store.commit
  addToCart ({ commit, state }, product) {
    if (product.inventory > 0) {

      // [1, 2, 3, 4].find((value, index, arr) => {
  
      // })find()函数用来查找目标元素，找到就返回该元素，找不到返回undefined。

      let item = state.items.find( item => item.id === product.id )
      if (!!item) {
        // commit触发mutations中的函数，将item（新增的信息）进行添加或者原有基础增加
        commit('update', item)
      } else {
        commit('push', {
          // 购物车增家的初始信息
          id: product.id,
          quantity: 1

        })
      }
      // 增加信息之后，products的库存要减少，和其他组件传递信息要加上 { root: true }
      // products/update  模块名字/函数名字
      commit('products/update', { id: product.id }, { root: true })
    }
  }
}
// 将改分子store的选项参数都暴露
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}