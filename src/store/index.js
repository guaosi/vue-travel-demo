import Vue from 'vue'
import Vuex from 'vuex'
import city from './state'
import changeCity from './actions'
import toChangeCity from './mutations'

Vue.use(Vuex)
export default new Vuex.Store({
  state: city,
  actions: changeCity,
  mutations: toChangeCity
})
