<template>
    <div class="icons">
      <swiper :options="swiperOptionIcon">
       <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
            <div class="icon-img">
                <img class="icon-img-content" :src="item.imgUrl">
            </div>
            <p class="icon-desc">{{item.desc}}</p>
        </div>
        </swiper-slide>
      </swiper>
    </div>
</template>
<script>
export default{
  name: 'HomeIcon',
  computed: {
    pages () {
      const pages = []
      this.IconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  props: {
    IconList: Array
  },
  data () {
    return {
      swiperOptionIcon: {
        autoplay: false
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~style/variable.styl';
@import '~style/mixins.styl';

   // 让swiper内容布满整个div
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .05rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color:$darkTextColor
        ellipsis()
</style>
