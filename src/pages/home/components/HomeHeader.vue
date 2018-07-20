<template>
    <div class='header'>
        <div class='header-left'>左边</div>
        <div class='header-input'>输入城市/景点/游玩主题</div>
        <div class='header-right'>右边</div>
    </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang='stylus' scoped>
// lang表示要用的语法,scoped表示这里定义的类样式只在这个组件内生效
// 1rem= html font-size=50px
// 这里给的图是原来尺寸的2倍
  .header
    display: flex
    line-height: .86rem
    background: #00bcd4
    color: #fff
    .header-left
      width: .64rem
      float: left
    .header-input
      flex:1
      line-height: .64rem
      height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align:center

</style>
