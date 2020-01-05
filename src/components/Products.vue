<template>
  <ul>
    <li v-for="product of products" :key="product.id">
      {{ product.title }} - {{ product.price }}
      <br />
      <!-- disabled 按钮是否能点击的属性 -->
      <!-- addToCart(product)点击时将单条product物品信息传入car.js模块 -->
      <button :disabled="product.inventory === 0" @click="addToCart(product)">放入购物车</button>
    </li>
  </ul>
</template>

<script>
// 引入辅助函数
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    // 参数一是mapState所找的模块名字，参数二是模块中的数据
    // 一个store树，可以有很多分支就是moudle 分支上的state就是树叶
    ...mapState('products', {
      // products是分支product.js请求的store数据
      products: 'all'
    })
  },

  methods: {
    // 上面addToCart是此处的方法，下面是store的
    addToCart (product) {
      // dispatch触发cart模块的actions中的addToCart函数，并传递参数product，单条物品信息
      this.$store.dispatch('cart/addToCart', product)
    }
  },
  //created钩子函数，页面创建完成后就自动触发其中的函数
  created () {
    this.$store.dispatch('products/getAllproducts')
  }
}
</script>
