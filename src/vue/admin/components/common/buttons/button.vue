<template lang="pug">
  button(
    type="button",
    @click.prevent="handleClick"
  ).add-button {{title}}
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Отправить'
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>
<style src="./admin-button.scss" lang="scss"></style>