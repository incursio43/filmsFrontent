<template>
  <div>
    <v-text-field
      v-bind:label="Label"
      v-model="value"
      v-bind:rules="isRequired ? rules : null"
      v-bind:disabled="disabled"
      hide-details="auto"
      v-if="type === 'Input'"
      @change="change"
    ></v-text-field>
    <v-select
        :items="itemsTypes"
        v-bind:label="Label"
        v-if="type === 'Select' && Label === 'Type'"
        v-bind:disabled="disabled"
        v-model="value"
        @change="change"
    ></v-select>
    <v-select
        :items="genres"
        v-bind:label="Label"
        v-if="type === 'Select' && Label === 'Genre'"
        value="text"
        v-bind:disabled="disabled"
        v-model="value"
        @change="change"
    ></v-select>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Input',
  props: ['Label', 'isRequired', 'length', 'type', 'disabled', 'text'],
  data () {
    return {
      rules: [
        value => !!value || 'Required.',
        value => (value && value.trim().length >= 1) || 'Min 1 characters',
        value => (value && this.length && value.length <= this.length) || `Max ${this.length} characters`
      ],
      itemsTypes: ['Movie', 'Serie', 'Documental', 'Anime'],
      value: this.text ? this.text : ''
    }
  },
  computed: {
    ...mapState(['genres'])
  },
  methods: {
    ...mapActions(['getGenres']),
    change () {
      if (this.Label === 'Name') {
        this.$emit('changeName', this.value)
      }
      if (this.Label === 'Director') {
        this.$emit('changeDirector', this.value)
      }
      if (this.Label === 'Description') {
        this.$emit('changeDescription', this.value)
      }
      if (this.Label === 'Review') {
        this.$emit('changeReview', this.value)
      }
      if (this.Label === 'Type') {
        this.$emit('changeType', this.value)
      }
      if (this.Label === 'Genre') {
        this.$emit('changeGenre', this.genres.indexOf(this.value) + 1)
      }
      if (this.Label === 'Year') {
        this.$emit('changeYear', this.value)
      }
      if (this.Label === 'Score') {
        this.$emit('changeScore', this.value)
      }
    }
  },
  created () {
    if (this.Label === 'Genre') {
      this.getGenres()
    }
  }
}
</script>
