<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <Input isRequired="true" length=80 type='Input' Label="Name" @changeName="changeName"/>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <Input isRequired="true" length=60 type='Input' Label="Director" @changeDirector="changeDirector"/>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <Input type='Input' isRequired="true" length=200 Label="Description" @changeDescription="changeDescription"/>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <Input isRequired="true" type='Select' Label="Type" @changeType="changeType"/>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <Input isRequired="true" type='Select' Label="Genre" @changeGenre="changeGenre"/>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <Input isRequired="true" length=4 type='Input' Label="Year" @changeYear="changeYear"/>
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
  name: 'FilmNew',
  components: {
    Input
  },
  data () {
    return {
      Name: '',
      Director: '',
      Description: '',
      Type: '',
      Genre: '',
      Year: ''
    }
  },
  computed: {
    ...mapState(['genre'])
  },
  methods: {
    ...mapActions(['postFilm', 'getGenre']),
    guardar () {
      const film = { Name: this.Name, Director: this.Director, IdGenre: this.Genre, Description: this.Description, Type: this.Type, Year: this.Year, Review: '', Score: 0 }
      this.postFilm(film)
    },
    changeName (data) {
      this.Name = data
    },
    changeDirector (data) {
      this.Director = data
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
    changeGenre (data) {
      this.Genre = data
    },
    changeYear (data) {
      this.Year = data
    }
  }
}
</script>
