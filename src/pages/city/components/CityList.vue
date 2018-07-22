<template>
  <div class="list" ref="warpper">
    <div>
     <div class=area>
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
            <div class="button-wrapper">
                <div class="button">{{this.city}}</div>
            </div>
        </div>
     </div>
     <div class=area>
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
            <div class="button-wrapper" v-for="item in hotCities" :key="item.id">
                <div class="button" @click="handleSelectCity(item.name)">{{item.name}}</div>
            </div>
        </div>
     </div>
     <div class=area  v-for="(item, key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="inneritem in item" :key="inneritem.id"  @click="handleSelectCity(inneritem.name)">{{inneritem.name}}</div>
        </div>
     </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapState, mapActions} from 'vuex'
export default {
  name: 'CityList',
  methods: {
    handleSelectCity (city) {
      // this.$store.dispatch('changeCity', city)
      this.change(city)
      // js路由跳转
      this.$router.push('/')
      // 也可以直接调用commit来调用mutations里的方法
      // this.$store.commit('toChangeCity', city)
    },
    // 让mapActions里的函数直接挂到当前组件，可以直接调用
    // ...mapActions(['changeCity'])
    // 或者
    ...mapActions({'change': 'changeCity'})
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.warpper)
  },
  computed: {
    // 将state里的值转成当前组件的值
    ...mapState(['city'])
  },
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  watch: {
    letter () {
      if (this.letter) {
        // 因为ref这里是循环输出，所以必须this.$refs[this.letter][0]才能获得真正的dom
        let element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>
<style lang='stylus' scoped>
  .border-topbottom
    &:before
      border-color:#ccc
    &:after
      border-color:#ccc
  .border-bottom
    &:before
      border-color:#ccc
  .list
    overflow:hidden
    position:absolute
    top:1.58rem
    left:0
    right:0
    bottom:0
    .title
      line-height:.54rem
      background:#eee
      padding-left:.2rem
      color:#666
      font-size:.26rem
    .button-list
      overflow:hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float:left
        width:33.33%
        .button
          margin:.1rem
          padding: .1rem 0
          text-align:center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
