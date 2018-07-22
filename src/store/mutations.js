export default {
  toChangeCity (state, city) {
    // 这里的state就是上面定义的state
    state.city = city
    // 因为有可能有部分不支持本地缓存，所以用之前要try...catch
    try {
      localStorage.city = state.city
    } catch (e) {
    }
  }
}
