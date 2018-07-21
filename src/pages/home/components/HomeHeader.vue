<template>
    <div class='header'>
        <div class='header-left'>
            <span class="iconfont back-icon">&#xe624;</span>
        </div>
        <div class='header-input'>
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
            </div>
        <router-link to="/city">
          <div class='header-right'>
              {{city}}
              <span class="iconfont arrow-icon">&#xe64a;</span>
          </div>
        </router-link>
    </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang='stylus' scoped>
@import '~style/variable.styl'
// lang表示要用的语法,scoped表示这里定义的类样式只在这个组件内生效
// 1rem= html font-size=50px
// 这里给的图是原来尺寸的2倍
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align:center
        font-size:.4rem
        margin-left:.2rem
    .header-input
      flex:1
      line-height: .64rem
      height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align:center
      color: #fff
      .arrow-icon
        margin-left: -0.04rem
        font-size: .24rem
</style>
