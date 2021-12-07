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
                  <strong>Titulo: {{filmRandom.Name}}</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              color="deep-purple lighten-1"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Director: {{filmRandom.Director}}</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              color="deep-purple lighten-1"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Genre: {{filmRandom.IdGenre}}</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              color="deep-purple lighten-1"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Descripción: {{filmRandom.Description}}</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              color="deep-purple lighten-1"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Review: {{filmRandom.Review ? filmRandom.Review : 'No se encuentra con un review.'}}</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              color="deep-purple lighten-1"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Score: {{filmRandom.Score ? filmRandom.Score : 'No se cuenta con un score.'}}</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              color="deep-purple lighten-1"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong >{{filmRandom.Type ? `Type: ${filmRandom.Type}` : 'No se cuenta con un type'}}</strong>
                  <strong v-if="filmRandom.Type === '2'">Type: {{filmRandom.Type}} - Movie</strong>
                  <strong v-if="filmRandom.Type === '4'">Type: {{filmRandom.Type}} - Serie</strong>
                  <strong v-if="filmRandom.Type === '6'">Type: {{filmRandom.Type}} - Documental</strong>
                  <strong v-if="filmRandom.Type === '8'">Type: {{filmRandom.Type}} - Anime</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              color="deep-purple lighten-1"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Year: {{filmRandom.Year}}</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item
              color="deep-purple lighten-1"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Favorite: {{filmRandom.isFavorite ? 'Esta en favoritos' : 'No esta en favoritos'}}</strong>
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
    ...mapState(['filmRandom'])
  },
  methods: {
    ...mapActions(['getFilmRandom'])
  },
  created () {
    this.getFilmRandom()
  }
}
</script>
<style>

</style>
