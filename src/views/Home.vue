<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters style="height: 150px;">
      <v-col>
        <Tabla :favorites="favorites" :genres="genres" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Tabla from '../components/Tabla'

export default {
  name: 'Home',
  components: {
    Tabla
  },
  computed: {
    ...mapState(['favorites', 'genres'])
  },
  methods: {
    ...mapActions(['getFavorites', 'getGenres'])
  },
  data () {
    return {
    }
  },
  created () {
    this.getFavorites()
    this.getGenres()
  }
}
</script>
