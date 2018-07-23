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
import {mapState} from 'vuex'

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
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo: function () {
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSource)
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
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
<style>
</style>
