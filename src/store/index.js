import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favorites: [],
    filterFavorites: [],
    genres: [],
    films: []
  },
  mutations: {
    setFavorites (state, data) {
      state.favorites = data
    },
    setFilterFavorites (state, data) {
      state.filterFavorites = data
    },
    setGenres (state, data) {
      state.genres = data
    },
    setFilms (state, data) {
      state.films = data
    }
  },
  actions: {
    getFavorites ({ commit }) {
      axios.get('http://localhost:3000/favorites').then((response) => {
        commit('setFavorites', response.data)
        console.log(this.state.favorites)
      })
    },
    getGenres ({ commit }) {
      axios.get('http://localhost:3000/genres').then((response) => {
        const data = response.data.map((item) => { return item.Name })
        commit('setGenres', data)
        console.log(this.state.genres)
      })
    },
    getFilterFavorites ({ commit }, filtro) {
      commit('setFilterFavorites', this.state.favorites.filter(favorite => favorite.Genre === filtro))
      console.log(this.state.filterFavorites)
    },
    getFilms ({ commit }) {
      axios.get('http://localhost:3000/films').then((response) => {
        commit('setFilms', response.data)
        console.log(this.state.films)
      })
    }
  },
  modules: {
  }
})
