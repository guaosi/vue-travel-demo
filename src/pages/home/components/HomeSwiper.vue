<template>
  <div class='wrapper'>
    <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="item in swiperImg" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperImg: Array
  },
  data: function () {
    return {
    //  官网上的配置,用来显示下面的滚动点
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 3000,
        loop: true
      }
    }
  },
  computed: {
    showSwiper: function () {
      return this.swiperImg.length
    }
  }
}
</script>
<style lang='stylus' scoped>
// >>> 表示全局穿透,不受scoped限制，可以修改到swiper组件
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
// 这里的百分比是由长/宽计算出来的
// 这里的style可以让轮播图固定在那个位置，不会被其他的元素侵占
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    backgrount: #eee
    .swiper-img
      width:100%
</style>
