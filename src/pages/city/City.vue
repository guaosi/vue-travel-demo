<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="handleClickTo"></city-alphabet>
    </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './components/CityHeader'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
import CityAlphabet from './components/CityAlphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.getCityInfoSource)
    },
    getCityInfoSource (res) {
      res = res.data
      if (res.ret && res.data) {
        let data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    handleClickTo (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
<style>

</style>
