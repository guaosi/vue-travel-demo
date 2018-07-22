export default {
  changeCity (ctx, city) {
    // 这里的ctx代表上下文,city是传递过来的参数
    // commit用来调用mutations里的方法
    ctx.commit('toChangeCity', city)
  }
}
