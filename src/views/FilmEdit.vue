<template>
  <v-form>
    <v-container>
      <v-row v-if="show">
        <v-col cols="12" md="4">
          <Input isRequired="true" type='Input'  Label="ID" v-bind:text="this.ID" disabled/>
        </v-col>
        <v-col cols="12" md="4">
          <Input isRequired="true" type='Input' Label="Name" v-bind:text="this.Name" disabled/>
        </v-col>
        <v-col cols="12" md="4" >
          <Input isRequired="true" type='Input' Label="Director" :text="this.Director" disabled/>
        </v-col>
        <v-col cols="12" md="4">
          <Input isRequired="true" length=200 type='Input' Label="Description" :text="this.Description" @changeDescription="changeDescription"/>
        </v-col>
        <v-col cols="12" md="4">
          <Input type='Select' Label="Type" :text="this.Type" @changeType="changeType"/>
        </v-col>
        <v-col cols="12" md="4">
          <Input type='Select' Label="Genre" :text="this.Genre" disabled/>
        </v-col>
        <v-col cols="12" md="4">
          <Input isRequired="true" length=4 type='Input' Label="Year" :text="this.Year" @changeYear="changeYear"/>
        </v-col>
        <v-col cols="12" md="4">
          <Input isRequired="true" length=500 type='Input' Label="Review" :text="this.Review" @changeReview="changeReview"/>
        </v-col>
        <v-col cols="12" md="4">
          <Input isRequired="true" type='Input' length=1 Label="Score" :text="this.Score" @changeScore="changeScore"/>
        </v-col>
          <v-btn outlined rounded text v-on:click="guardar">
            Guardar
          </v-btn>
      </v-row>
      <v-row>
        <v-btn outlined rounded text v-on:click="cargar">
          Cargar Datos
        </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Input from '../components/Input.vue'
export default {
  name: 'FilmEdit',
  components: {
    Input
  },
  data () {
    return {
      ID: '',
      Name: '',
      Director: '',
      Description: '',
      Type: '',
      Genre: '',
      Year: '',
      Review: '',
      Score: '',
      show: false
    }
  },
  computed: {
    ...mapState(['film', 'genre'])
  },
  methods: {
    ...mapActions(['getFilm', 'getGenre', 'putFilm']),
    guardar () {
      if (this.Type === 'Movie') {
        this.Type = 2
      } else if (this.Type === 'Serie') {
        this.Type = 4
      } else if (this.Type === 'Documental') {
        this.Type = 6
      } else {
        this.Type = 8
      }
      const film = { ID: this.ID, Name: this.Name, Director: this.Director, IdGenre: this.Genre, Description: this.Description, Type: this.Type, Year: this.Year, Review: this.Review, Score: this.Score }
      this.putFilm(film)
    },
    cargar () {
      this.ID = this.film.ID
      this.Name = this.film.Name
      this.Director = this.film.Director
      this.Description = this.film.Description
      if (this.film.Type === '2') {
        this.Type = 'Movie'
      } else if (this.film.Type === '4') {
        this.Type = 'Serie'
      } else if (this.film.Type === '6') {
        this.Type = 'Documental'
      } else {
        this.Type = 'Anime'
      }
      this.Genre = this.film.Genre
      this.Year = this.film.Year
      this.Review = this.film.Review
      this.Score = this.film.Score
      this.show = true
    },
    changeDescription (data) {
      this.Description = data
    },
    changeType (data) {
      if (data === 'Movie') {
        this.Type = 2
      } else if (data === 'Serie') {
        this.Type = 4
      } else if (data === 'Documental') {
        this.Type = 6
      } else {
        this.Type = 8
      }
    },
    changeYear (data) {
      this.Year = data
    },
    changeReview (data) {
      this.Review = data
    },
    changeScore (data) {
      this.Score = data
    }
  },
  created () {
    this.getFilm(this.$route.params.ID)
  }
}
</script>
