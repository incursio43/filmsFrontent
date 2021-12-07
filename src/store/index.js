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
    genre: {},
    films: [],
    film: {},
    filmRandom: {}
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
    setGenre (state, data) {
      state.genre = data
    },
    setFilms (state, data) {
      state.films = data
    },
    setFilm (state, data) {
      state.film = data
    },
    setFilmRandom (state, data) {
      state.filmRandom = data
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
    getGenre ({ commit }, genre) {
      axios.get('http://localhost:3000/genres').then((response) => {
        const genreFind = response.data.filter(item => item.Name === genre)
        commit('setGenre', genreFind[0])
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
    },
    getFilm ({ commit }, ID) {
      axios.get(`http://localhost:3000/films/${ID}`).then((response) => {
        commit('setFilm', response.data[0])
        console.log(this.state.film)
      })
    },
    postFilm ({ commit }, film) {
      console.log(film)
      axios.post('http://localhost:3000/films', film).then((response) => {
        alert(response.data.message)
        console.log(response)
      }).catch((error) => {
        alert('No se ha podido guardar el film')
        console.log(error)
      })
    },
    postFavorites ({ commit }, IdFild) {
      axios.post('http://localhost:3000/favorites', { IdFild: IdFild }).then((response) => {
        alert(response.data.message)
        console.log(response)
      }).catch((error) => {
        alert('No se ha podido agregar a favoritos el film')
        console.log(error)
      })
    },
    deleteFavorites ({ commit }, IdFild) {
      axios.delete(`http://localhost:3000/favorites/${IdFild}`).then((response) => {
        alert(response.data.message)
        console.log(response)
      }).catch((error) => {
        alert('No se ha podido agregar a favoritos el film')
        console.log(error)
      })
    },
    deleteFilm ({ commit }, IdFild) {
      axios.delete(`http://localhost:3000/films/${IdFild}`).then((response) => {
        alert(response.data.message)
        console.log(response)
      }).catch((error) => {
        alert('No se ha podido eliminar el film')
        console.log(error)
      })
    },
    getFilmRandom ({ commit }) {
      axios.get('http://localhost:3000/films').then((response) => {
        const random = Math.floor(Math.random() * response.data.length)
        console.log(response.data[random])
        commit('setFilmRandom', response.data[random])
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  modules: {
  }
})
