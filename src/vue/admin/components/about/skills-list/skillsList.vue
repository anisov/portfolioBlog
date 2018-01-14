<template lang="pug">
  .skills-item
    .skills-item__title {{skillType}}
    skills-item(
      v-for='skill in skills',
      :key='skill.id'
      :skill='skill'
      v-if='checkSkillType(skillType) === skill.type'
      @removeSkill='removeSkill'
    )
    .skills-item__add
      .skills-item__add-row
        app-input(
          type="text"
          placeholder="Название"
          v-model="newSkill"
          @enter='enter'
          :nothing="newSkill"
        )
      .skills-item__error {{validation.firstError('newSkill')}}
      app-button(
        title="Добавить"
        @click="addSkill"
        :disabled="validation.hasError('newSkill')"
      )
</template>
<script>
import { Validator } from 'simple-vue-validator'

import { mapMutations } from 'vuex';
export default {
    mixins:[require('simple-vue-validator').mixin],
    validators:{
      newSkill(value){
        return Validator.value(value).required("Поле должно быть заполнено")
      }
    },
    props: {
        skillType: String,
        skills: Array
    },
    data(){
      return {
        newSkill:'',
      }
    },
    methods:{
      ...mapMutations(['addNewSkill','removeExistedSkill']),
      addSkill(){
        this.$validate().then(success => {
          if (success) {
            this.addNewSkill({
              name: this.newSkill,
              percents:0,
              type: this.checkSkillType(this.skillType)
            })
            this.newSkill = '';
            this.validation.reset();
          }
        })
      }, 
      enter(){
        this.addSkill();
      },
      checkSkillType(skillType) {
        switch (skillType) {
          case 'Frontend':
            return 1;
          case 'Workflow':
            return 2;
          case 'Backend':
            return 3;
        }
      },
      removeSkill(skillID){
        this.removeExistedSkill(skillID)
      }
    },
    components: {
        skillsItem: require('../skills-item/skillsItem'),
        appInput: require('../../common/inputs/input'),
        appButton: require('../../common/buttons/button')
  }
}
</script>
<style src="./admin-skillList.scss" lang="scss"></style>