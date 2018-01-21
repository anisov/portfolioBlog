<template lang="pug">
  .works
    h2.works__title Страница «Мои работы»
    .works__container
      form.works__form(method="POST" enctype="multipart/form-data")
        h3.works__form-title Добавить работу
        .message-post {{message.message}}
        .works__row
          app-input(
            placeholder="Название проекта"
            type="text"
            v-model="fields.title"
            :nothing='fields.title'
          ).works__input
        .works__error-message {{validation.firstError('fields.title')}}
        .works__row
          app-input(
            placeholder="Технологии"
            type="text"
            v-model="fields.technology"
            :nothing='fields.technology'
          ).works__input
        .works__error-message {{validation.firstError('fields.technology')}}
        .works__row
          app-input(
            placeholder="Ссылка"
            type="text"
            v-model="fields.href"
            :nothing='fields.href'
          ).works__input
        .works__error-message {{validation.firstError('fields.href')}}
        .works__row
          label.works__upload
            input.works__type-file(
              type="file"
              @change="getFile($event)"
            )
            .works__icon
            .works__upload-text Загрузить картинку
          .works__error-message {{validation.firstError('fields.file')}}
        .works__row
          app-button(
            title="Добавить"
            @click="sendData"
          )
</template>
<script>

import { mapActions,mapGetters,mapMutations } from 'vuex'
import { Validator } from 'simple-vue-validator'

export default {
  mixins: [require('simple-vue-validator').mixin],
  validators: {
    'fields.title': function (value) {
      return Validator.value(value).required("Поле должно быть заполнено");
    },
    'fields.technology': function (value) {
      return Validator.value(value).required("Поле должно быть заполнено");
    },
    'fields.href': function (value) {
      return Validator.value(value).required("Поле должно быть заполнено");
    },
    'fields.file': function (value) {
      return Validator.custom(() => {
        if (Validator.isEmpty(value)) return 'Загрузите пожалуйста картинку'
        const allowedTypes = ['image/jpeg', 'image/png','image/jpg']
        let type = value.type
        if (!allowedTypes.includes(type)) {
          return 'Недопустимый формат файла, разрешены только .jpg и .png'
        }
      })
    }
  },
  data() {
    return {
      fields: {
        title: '',
        technology: '',
        file: null,
        href:''
      }
    }
  },
  methods: {
    ...mapMutations('works',['addWork']),
    getFile(event) { 
      let file = event.target.files[0]
      this.fields.file = file
    },
    sendData() {
      this.$validate().then(success => {
        if (success){
          let formData = new FormData()
          formData.append('image', this.fields.file)
          formData.append('tech', this.fields.technology)
          formData.append('title', this.fields.title)
          formData.append('href', this.fields.href)
          this.addWork(formData)
          console.log('Данные отправлены')
          this.fields.title=''
          this.fields.technology=''
          this.fields.file='',
          this.fields.href=''
          this.validation.reset();
        }else{
        }
      })
    }
  },
  computed: {
    ...mapGetters('works', ['message'])
  },
  components: {
    appInput: require('../common/inputs/input'),
    appButton: require('../common/buttons/button')
  }
}

</script>
<style src="./admin-works.scss" lang="scss"></style>