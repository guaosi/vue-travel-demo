<template>
  <div class='wrapper'>
    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item in swiperImg" :key="item.id">
        <img :src="item.url" class="swiper-img">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
    //  官网上的配置,用来显示下面的滚动点
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperImg: [{
        id: '001', url: 'http://img1.qunarzz.com/piao/fusion/1807/a1/41a802abfc4f0202.jpg_750x200_9f0cf69c.jpg'
      }, {
        id: '002', url: 'http://img1.qunarzz.com/piao/fusion/1702/9f/5c5bc6d9c8335a02.jpg_750x200_5182fbc0.jpg'
      }, {
        id: '003', url: 'http://img1.qunarzz.com/piao/fusion/1806/c5/8f384b861e4e9e02.jpg_750x200_29d574ba.jpg'
      }
      ]
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
    padding-bottom: 26.67%
    .swiper-img
      width:100%
</style>
