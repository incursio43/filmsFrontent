<template>
  <v-card
    class="mx-auto"
    max-width="70%"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{film.Name}}
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Director: {{film.Director}}
        </v-list-item-title>
        <v-list-item-subtitle v-if="film.Type === '2'">Type: {{film.Type}} - Movie</v-list-item-subtitle>
        <v-list-item-subtitle v-if="film.Type === '4'">Type: {{film.Type}} - Serie</v-list-item-subtitle>
        <v-list-item-subtitle v-if="film.Type === '6'">Type: {{film.Type}} - Documental</v-list-item-subtitle>
        <v-list-item-subtitle v-if="film.Type === '8'">Type: {{film.Type}} - Anime</v-list-item-subtitle>
        <v-list-item-subtitle>Year: {{film.Year}} </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="100"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <router-link :to="`/film/${film.ID}/detail`">
        <v-btn outlined rounded text>
          Detalle
        </v-btn>
      </router-link>
      <router-link :to="`/film/${film.ID}`">
        <v-btn outlined rounded text>
          Editar
        </v-btn>
      </router-link>
      <router-link :to="`/film/${film.ID}`">
        <v-btn outlined rounded text>
          Eliminar de favoritos
        </v-btn>
      </router-link>
      <router-link :to="`/film/${film.ID}`">
        <v-btn outlined rounded text >
          Favoritos de favoritos
        </v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: 'Tarjeta',
  props: ['film']
}
</script>

<style scoped>

</style>
