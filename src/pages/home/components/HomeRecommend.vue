<template>
  <div>
      <div class="title">热销推荐</div>
      <ul>
          <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
              <img :src="item.url" class="item-img">
              <div class="item-info">
                  <p class="item-title">{{item.title}}</p>
                  <p class="item-desc">{{item.desc}}</p>
                  <button class="item-button">查看详情</button>
              </div>
          </li>
      </ul>
  </div>
</template>
<script>
export default{
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '001',
        url: 'http://img1.qunarzz.com/sight/p0/1601/60/604aa493a5f1339190.img.jpg_200x200_a9fc0695.jpg',
        title: '三亚亚龙湾爱立方滨海乐园',
        desc: '三亚亚龙湾爱立方滨海乐园'
      }, {
        id: '002',
        url: 'http://img1.qunarzz.com/sight/p0/1603/20/200ef684be47e1d390.water.jpg_200x200_e87f4856.jpg',
        title: '夜游三亚湾',
        desc: '夜游三亚湾'
      }, {
        id: '003',
        url: 'http://img1.qunarzz.com/sight/p0/1802/ef/ef88e4b2fec1f385a3.img.jpg_200x200_217e7a83.jpg',
        title: '亚特兰蒂斯失落的空间水族馆',
        desc: '亚特兰蒂斯失落的空间水族馆'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~style/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
