<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Director
          </th>
          <th class="text-left">
            Type
          </th>
          <th class="text-left">
            <v-select
              :items="genres"
              label="Genre"
              v-model="genreSelected"
              @change="consulta"
            ></v-select>
          </th>
          <th class="text-left">
            Year
          </th>
        </tr>
      </thead>
      <tbody v-if="filterFavorites.length === 0">
        <tr
          v-for="favorite in favorites"
          :key="favorite.idFavorite"
        >
          <td>{{ favorite.Name }}</td>
          <td>{{ favorite.Director }}</td>
          <td v-if="favorite.Type === 'A' " v-bind:style="{backgroundColor:'Green'}">{{ favorite.Type }}</td>
          <td v-if="favorite.Type === 'B' " v-bind:style="{backgroundColor:'Yellow'}">{{ favorite.Type }}</td>
          <td v-if="favorite.Type === 'C' " v-bind:style="{backgroundColor:'Orange'}">{{ favorite.Type }}</td>
          <td v-if="favorite.Type === 'D' " v-bind:style="{backgroundColor:'Red'}">{{ favorite.Type }}</td>
          <td>{{ favorite.Genre }}</td>
          <td>{{ favorite.Year }}</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr
          v-for="filterFavorite in filterFavorites"
          :key="filterFavorite.idFavorite"
        >
          <td>{{ filterFavorite.Name }}</td>
          <td>{{ filterFavorite.Director }}</td>
          <td v-if="favorite.Type === 'A' " v-bind:style="{backgroundColor:'Green'}">{{ favorite.Type }}</td>
          <td v-if="favorite.Type === 'B' " v-bind:style="{backgroundColor:'Yellow'}">{{ favorite.Type }}</td>
          <td v-if="favorite.Type === 'C' " v-bind:style="{backgroundColor:'Orange'}">{{ favorite.Type }}</td>
          <td v-if="favorite.Type === 'D' " v-bind:style="{backgroundColor:'Red'}">{{ favorite.Type }}</td>
          <td>{{ filterFavorite.Genre }}</td>
          <td>{{ filterFavorite.Year }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Tabla',
  props: ['favorites', 'genres'],
  data () {
    return {
      genreSelected: ''
    }
  },
  computed: {
    ...mapState(['filterFavorites'])
  },
  methods: {
    ...mapActions(['getFilterFavorites']),
    consulta () {
      this.getFilterFavorites(this.genreSelected)
    }
  }
}
</script>
