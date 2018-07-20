<template>
  <div>
      <div class="title">周未去哪儿</div>
      <ul>
          <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
              <div class="item-img-wrapper">
                <img :src="item.url" class="item-img">
              </div>
              <div class="item-info">
                  <p class="item-title">{{item.title}}</p>
                  <p class="item-desc">{{item.desc}}</p>
              </div>
          </li>
      </ul>
  </div>
</template>
<script>
export default{
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '001',
        url: 'http://img1.qunarzz.com/sight/source/1505/5e/6e13db8af6ec30.jpg_r_640x214_5c1b0fa9.jpg',
        title: '三亚必游TOP10',
        desc: '三亚必游TOP10'
      }, {
        id: '002',
        url: 'http://img1.qunarzz.com/sight/source/1505/a4/df8543b6b8506d.jpg_r_640x214_660e1e3a.jpg',
        title: '就是要看海',
        desc: '就是要看海'
      }, {
        id: '003',
        url: 'http://img1.qunarzz.com/sight/source/1505/3d/f99f5c73b52c4d.jpg_r_640x214_4e60b24c.jpg',
        title: '寻找最佳潜水地',
        desc: '寻找最佳潜水地'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~style/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
