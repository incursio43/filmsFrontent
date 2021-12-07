<template lang="html">
  <v-container>
    <v-row justify="space-around">
      <v-card width="700">
        <!-- <v-img
          height="200px"
          v-bind:src="poster"
        ></v-img> -->
        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Detail film
          </div>
          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              color="deep-purple lighten-1"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Titulo: {{film.Name}}</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              color="deep-purple lighten-1"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Director: {{film.Director}}</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              color="deep-purple lighten-1"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Genre: {{film.IdGenre}}</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              color="deep-purple lighten-1"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Descripción: {{film.Description}}</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              color="deep-purple lighten-1"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Review: {{film.Review ? film.Review : 'No se encuentra con un review.'}}</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              color="deep-purple lighten-1"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Score: {{film.Score ? film.Score : 'No se cuenta con un score.'}}</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              color="deep-purple lighten-1"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong >{{film.Type ? `Type: ${film.Type}` : 'No se cuenta con un type'}}</strong>
                  <strong v-if="film.Type === 'A'">Type: {{film.Type}} - Película para todo público</strong>
                  <strong v-if="film.Type === 'B'">Type: {{film.Type}} - Película para adolescentes de 12 años en adelante</strong>
                  <strong v-if="film.Type === 'C'">Type: {{film.Type}} - Película para adultos de 18 años en adelante</strong>
                  <strong v-if="film.Type === 'D'">Type: {{film.Type}} - Película para adultos, con sexo explícito, lenguaje procaz o alto grado de violencia</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              color="deep-purple lighten-1"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Year: {{film.Year}}</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              color="deep-purple lighten-1"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Favorite: {{film.isFavorite ? 'Esta en favoritos' : 'No esta en favoritos'}}</strong>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
          <router-link :to="`/film`">
            <v-btn outlined rounded text >
              Regresar
            </v-btn>
          </router-link>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'FilmDetail',
  computed: {
    ...mapState(['film'])
  },
  methods: {
    ...mapActions(['getFilm'])
  },
  created () {
    this.getFilm(this.$route.params.ID)
  }
}
</script>
<style>

</style>
