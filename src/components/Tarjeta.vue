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
        <v-list-item-subtitle v-if="film.Type === 'A'">Type: {{film.Type}} - Películas para todo público</v-list-item-subtitle>
        <v-list-item-subtitle v-if="film.Type === 'B'">Type: {{film.Type}} - Películas para adolescentes de 12 años en adelante</v-list-item-subtitle>
        <v-list-item-subtitle v-if="film.Type === 'C'">Type: {{film.Type}} - Películas para adultos de 18 años en adelante</v-list-item-subtitle>
        <v-list-item-subtitle v-if="film.Type === 'D'">Type: {{film.Type}} - Películas para adultos, con sexo explícito, lenguaje procaz o alto grado de violencia</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="100"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Detalle
      </v-btn>
      <v-btn
        outlined
        rounded
        text
      >
        Editar
      </v-btn>
      <v-btn
        outlined
        rounded
        text
      >
        Eliminar
      </v-btn>
      <v-btn
        outlined
        rounded
        text
      >
        Favoritos
      </v-btn>
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
