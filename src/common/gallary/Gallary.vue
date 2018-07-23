<template>
    <div class="container" @click="handleCloseBanner">
     <div class='wrapper'>
         <swiper :options="swiperOption">
    <!-- slides -->
            <swiper-slide v-for="(item, index) in imgs" :key="index">
             <img class="gallary-img" :src="item">
            </swiper-slide>
    <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
         </swiper>
     </div>
    </div>
</template>
<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleCloseBanner () {
      this.$emit('close')
    }
  },
  data: function () {
    return {
    //  官网上的配置,用来显示下面的滚动点
      swiperOption: {
        pagination: '.swiper-pagination',
        // 控制分页格式
        paginationType: 'fraction',
        // 因为swiper隐藏的时候width会有问题，所以需要observer
        // ovserver可以监听关于swiper的dom的改变,然后刷新
        observeParents: true,
        observer: true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      height: 0
      width: 100%
      padding-bottom: 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>
