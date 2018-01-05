<template lang="pug">
  label.skill
    .skill__name {{skill.name}}
    .skill__input-wrap
      input(type="text" :value="skill.percents" maxlength="3").skill__input
      .skill__measure %
    .skill__remove
      button(type="button"
       @click="removeSkill"
       class='skill__remove-btn' 
       ) X  
</template>

<script>
export default {
  props: {
    skill: Object
  },
  methods: {
    removeSkill() {
      this.$emit('removeSkill', this.skill.id)
    }
  }
}
</script>

<style src="./admin-skillsItem.scss" lang="scss"></style>