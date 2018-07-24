<template>
  <div>
    <div class="banner" @click="handleClickBanner">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-tittle">
            {{sightName}}
        </div>
        <div class="banner-number">
            <span class="iconfont banner-icon">&#xe692;</span>
            {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <common-gallary :imgs="gallaryImgs" v-show="showBanner" @close="closeBanner"></common-gallary>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  methods: {
    handleClickBanner () {
      this.showBanner = true
    },
    closeBanner () {
      this.showBanner = false
    }
  },
  props: {
    gallaryImgs: Array,
    sightName: String,
    bannerImg: String
  },
  data () {
    return {
      showBanner: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1411/e3/13b35b267d8d16b0d9694683e4a991b0.water.jpg_r_800x800_ff12e8fa.jpg', 'http://img1.qunarzz.com/sight/p0/1411/26/2fde4ddb0af5e1bee83a50efaebc96cb.water.jpg_r_800x800_ae3620b3.jpg', 'http://img1.qunarzz.com/sight/p0/1411/94/011cc6d81dbaadfc0f332662eb972c08.water.jpg_r_800x800_f4e3a406.jpg'
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
