<template>
  <div>
    <ul>
      <li v-for="product of beautifulItems" :key="product.id">
        {{ product.title }} - {{ product.price }} x {{ product.quantity }}
      </li>
    </ul>
    <div>总价：{{ totalPrice }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    // ?????
    // ...mapGetters('cart', {
    //   products: 'beautifulItems',
    //   total: 'totalPrice'
    // })
    // ?????  mapGetters???????????????????????
    ...mapGetters('cart', ['beautifulItems', 'totalPrice'])
  }
}
</script>
