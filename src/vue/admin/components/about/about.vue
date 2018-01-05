<template lang="pug">
  .about
    h2.about__title Страница «Обо мне»
    .about__skills-list
      skills-list(
        v-for="(skillType, index) in skillsTypes"
        :skillType="skillType"
        :key='index'
        :skills='skills'
      )
        
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
    data() {
        return {
            skillsTypes: ['Frontend', 'Workflow', 'Backend'],
        }
    },
    computed:{
        ...mapGetters(['skills'])
    },
    methods: {
        ...mapActions(['fetchSkills'])
    },
    created() {
        this.fetchSkills();
    },
    components: {
        skillsList: require('./skills-list/skillsList')
    }
}
</script>

<style src="./admin-about.scss" lang="scss"></style>