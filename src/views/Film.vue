<template>
  <v-container class="">
    <v-row no-gutters style="height: 150px;">
      <v-col v-for="film in films" :key="film.ID" cols="12">
        <Tarjeta :film="film"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Tarjeta from '../components/Tarjeta'

export default {
  name: 'Film',
  components: {
    Tarjeta
  },
  computed: {
    ...mapState(['films'])
  },
  methods: {
    ...mapActions(['getFilms'])
  },
  data () {
    return {
    }
  },
  created () {
    this.getFilms()
  }
}
</script>
