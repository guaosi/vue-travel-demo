<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperImg="swiperList"></home-swiper>
        <home-icon :IconList="iconList"></home-icon>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>
<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcon from './components/HomeIcon'
import HomeRecommend from './components/HomeRecommend'
import HomeWeekend from './components/HomeWeekend'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo: function () {
      axios.get('/api/index.json').then(this.getHomeInfoSource)
    },
    getHomeInfoSource (res) {
      res = res.data
      if (res.ret && res.data) {
        var data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
<style>
</style>
