<template lang="pug">
  input.input-field(
    :type="type"
    :placeholder="placeholder"
    @keydown.enter='enter'
    @input="changeVal($event.target.value)"
    v-model='nothingVal'
  )
</template>
<script>
export default {
  props: {
    value: String,
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    nothing:{
      type: String,
      default: ''
    }
  },
  computed:{
    nothingVal:{
      get: function(){
        return this.nothing
      },
      set: function(){
        return this.nothing
      }
    }
  },
  methods: {
    changeVal(value) {
      this.$emit('input', value)
    },
    enter() {
      this.$emit('enter')
    }
  }
}
</script>
<style src="./admin-input.scss" lang="scss"></style>