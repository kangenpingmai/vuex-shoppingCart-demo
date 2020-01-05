const _products = [
  { id: 1, title: 'iPhone XS Max', price: 10099, inventory: 2 },
  { id: 2, title: 'iPhone 8P', price: 5300, inventory: 5 },
  { id: 3, title: 'iPhone 7P 128G', price: 5200, inventory: 8 },
  { id: 4, title: 'iPhone 6SP', price: 2800, inventory: 15 }
]

// 定义一个promise,模拟接口请求
export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(_products)
    }, 100)
  })
}