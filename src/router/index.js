import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Film from '../views/Film.vue'
import FilmDetail from '../views/FilmDetail.vue'
import FilmNew from '../views/FilmNew.vue'

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
    path: '/film/new',
    name: 'FilmNew',
    component: FilmNew
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
