<template>
  <div>
    <h1>购物车案例</h1>
    <hr />
    <h2>产品列表</h2>
    <Products></Products>
    <h2>购物车</h2>
    <Cart></Cart>
  </div>
</template>

<script>
import Products from '@/components/Products'
import Cart from '@/components/Cart'
export default {
  components: {
    Products,
    Cart
  }
}
</script>

