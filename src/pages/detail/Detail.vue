<template>
    <div class="content">
      <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
      <detail-header></detail-header>
      <detail-list :list="categoryList"></detail-list>
    </div>
</template>
<script>
import DetailBanner from './components/DetailBanner'
import DetailHeader from './components/DetailHeader'
import DetailList from './components/DetailList'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      categoryList: [],
      sightName: '',
      bannerImg: '',
      gallaryImgs: []
    }
  },
  methods: {
    getDetailInfo () {
      // 另一种方法带参数请求
      axios.get('/api/detail.json', {
        params: {
          // 可以获取到路由定义里的id
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSource)
    },
    getDetailInfoSource (res) {
      let res1 = res.data
      if (res1.ret && res1.data) {
        let data = res1.data
        this.categoryList = data.categoryList
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>
<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
