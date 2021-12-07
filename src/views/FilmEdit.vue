<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <Input isRequired="true" type='Input'  Label="ID" :text="film.ID" disabled/>
        </v-col>
        <v-col cols="12" md="4">
          <Input isRequired="true" type='Input' Label="Name" :text="film.Name" disabled/>
        </v-col>
        <v-col cols="12" md="4" >
          <Input isRequired="true" type='Input' Label="Director" :text="this.Director" disabled/>
        </v-col>
        <v-col cols="12" md="4">
          <Input isRequired="true" type='Input' Label="Description" :text="this.Description" @changeDescription="changeDescription"/>
        </v-col>
        <v-col cols="12" md="4">
          <Input type='Select' Label="Type" :text="this.Type" @changeType="changeType"/>
        </v-col>
        <v-col cols="12" md="4">
          <Input type='Select' Label="Genre" :text="this.Genre" disabled/>
        </v-col>
        <v-col cols="12" md="4">
          <Input isRequired="true" type='Input' Label="Year" :text="this.Year" @changeYear="changeYear"/>
        </v-col>
        <v-col cols="12" md="4">
          <Input isRequired="true" type='Input' Label="Review" :text="this.Review" @changeReview="changeReview"/>
        </v-col>
        <v-col cols="12" md="4">
          <Input isRequired="true" type='Input' Label="Score" :text="this.Score" @changeScore="changeScore"/>
        </v-col>
          <v-btn outlined rounded text v-on:click="guardar">
            Guardar
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
      Score: ''
    }
  },
  computed: {
    ...mapState(['film', 'genre'])
  },
  methods: {
    ...mapActions(['getFilm', 'getGenre']),
    guardar () {
      const film = { ID: this.ID, Name: this.Name, Director: this.Director, IdGenre: this.Genre, Description: this.Description, Type: this.Type, Year: this.Year, Review: this.Score, Score: this.Score }
      console.log(film)
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
    console.log(this.film)
    // this.ID = this.film.ID
    // this.Name = this.film.Name
    // this.Director = this.film.Director
    // this.Description = this.film.Description
    // if (this.film.Type === '2') {
    //   this.Type = 'Movie'
    // } else if (this.film.Type === '4') {
    //   this.Type = 'Serie'
    // } else if (this.film.Type === '6') {
    //   this.Type = 'Documental'
    // } else {
    //   this.Type = 'Anime'
    // }
    // this.Genre = this.film.Genre
    // console.log(this.Genre)
    // this.Year = this.film.Year
    // this.Review = this.film.Review
    // this.Score = this.film.Score
  }
}
</script>
