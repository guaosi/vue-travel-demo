<template>
  <div>
    <div class="search">
        <input v-model="keyword" class="search-input" type="text" name="" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
        <ul>
          <li class="search-item border-bottom" @click="handleSelectCity(item.name)" v-for="item in list" :key="item.id">
            {{item.name}}
          </li>
          <li class="search-item border-bottom" v-show="hasList">
            没有找到匹配的城市
          </li>
        </ul>
    </div>
  </div>

</template>
<script>
import BScroll from 'better-scroll'
import {mapActions} from 'vuex'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      timer: null,
      list: []
    }
  },
  methods: {
    handleSelectCity (city) {
      // this.$store.dispatch('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapActions(['changeCity'])
  },
  props: {
    cities: Object
  },
  computed: {
    hasList () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        this.timer = null
      }
      this.timer = setTimeout(() => {
        if (!this.keyword) {
          this.list = []
          return
        }
        let result = []
        for (let i in this.cities) {
          this.cities[i].forEach(element => {
            if (element.spell.indexOf(this.keyword) > -1 || element.name.indexOf(this.keyword) > -1) {
              result.push(element)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>
<style lang='stylus' scoped>
  @import '~style/variable.styl';
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-heigght: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index:1
    overflow:hidden
    position:absolute
    top: 1.58rem
    left:0
    right:0
    bottom:0
    background:#eee
    .search-item
      line-height:.62rem
      padding-left:.2rem
      color:#666
      background:#fff
</style>
