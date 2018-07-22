<template>
  <ul class="list">
      <li
      class="item"
      v-for="(item, index) in letters"
      :key="index"
      @click="handleClickAlphabet"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :ref="item"
      >
      {{item}}
      </li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {
      touchStatus: false,
      timer: null,
      startY: 0
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  props: {
    cities: Object
  },
  computed: {
    letters () {
      let letter = []
      for (let i in this.cities) {
        letter.push(i)
      }
      return letter
    }
  },
  methods: {
    // 点击跳转到对应的字母
    handleClickAlphabet: function (e) {
      // e.target.innerText获取dom的文本值
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 设置一个函数来节流，16毫秒后执行，如果继续滑动，则会清空这个定时函数重新
        this.timer = setTimeout(() => {
          // 计算出A的位置 这里获得是从搜索框到第一个字母的位置
          let startY = this.startY
          // 计算出从屏幕到字母的位置
          let touchY = e.touches[0].clientY
          // 计算出从搜索框到触摸字母的位置
          touchY -= 79
          // 每个字母的大小是20
          let index = Math.floor((touchY - startY) / 20)
          // 这里必须判断，否则滚动多了有可能溢出
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang='stylus' scoped>
  @import '~style/variable.styl';
  .list
    display:flex
    flex-direction:column
    justify-content:center
    position:absolute
    top:1.58rem
    right:0
    bottom:0
    width:.4rem
    .item
      line-height:.4rem
      text-align: center
      color:$bgColor
</style>
