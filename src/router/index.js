import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Film from '../views/Film.vue'
import FilmDetail from '../views/FilmDetail.vue'
import FilmNew from '../views/FilmNew.vue'
import FilmEdit from '../views/FilmEdit.vue'
import FilmRandom from '../views/FilmRandom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/film',
    name: 'Film',
    component: Film
  },
  {
    path: '/film/:ID/detail',
    name: 'FilmDetail',
    component: FilmDetail
  },
  {
    path: '/film/:ID/edit',
    name: 'FilmEdit',
    component: FilmEdit
  },
  {
    path: '/film/new',
    name: 'FilmNew',
    component: FilmNew
  },
  {
    path: '/film/random',
    name: 'FilmRandom',
    component: FilmRandom
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
