<template lang="pug">
  .blog
    h2.blog__title Страница «Блог»
    .blog__container
      form.blog__form(action='../api/blog' method="POST" enctype="application/x-www-form-urlencoded")
        h3.blog__form-title Добавить запись
        .blog__message {{message.message}}
        .blog__row
          app-input(
            type="text",
            placeholder="Название"
            v-model="fields.title"
            :nothing='fields.title'
          ).blog__input
        .blog-item__error {{validation.firstError('fields.title')}}
        .blog__row
          app-input(
            type="date",
            v-model="fields.date"
            :nothing='fields.data'
          ).blog__input
        .blog-item__error {{validation.firstError('fields.date')}}
        .blog__row
          textarea.blog__textarea(
            type="text" 
            placeholder="Содержание"
            v-model="fields.text"
          )
        .blog-item__error {{validation.firstError('fields.text')}}
        .blog__row
          app-button(
            title="Добавить"
            @click="addPost"
            type="submit"
          )
      .blog__post
        ul.blog__post-list
          li(v-for="(post, index) in posts").blog__post-elem
            .blog__post-title {{post.title}}
            .blog__post-date {{post.date}}
            .blog__post-text {{post.text}}
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { Validator } from 'simple-vue-validator'
export default {
  mixins:[require('simple-vue-validator').mixin],
  validators: {
    'fields.title': function (value) {
      return Validator.value(value).required("Поле 'Название' должно быть заполнено");
    },
    'fields.date': function (value) {
      return Validator.value(value).required("Поле 'Дата' должно быть заполнено");
    },
    'fields.text': function (value) {
      return Validator.value(value).required("Поле 'Содержание' должно быть заполнено");
    },
  },
  data(){
    return {
      fields: {
        title: '',
        date: '',
        text: ''
      },
    }
  },
  methods: {
    ...mapMutations('posts',['addBlogPost']),
    addPost() {
      this.$validate().then(success => {
        if (success) {
          this.addBlogPost(this.fields)
          this.fields.title=''
          this.fields.date=''
          this.fields.text=''
          this.validation.reset();
        }
      })
    }
  },
  computed: {
    ...mapGetters('posts', ['posts','message']),
  },
  components: {
    appInput: require('../common/inputs/input'),
    appButton: require('../common/buttons/button')
  }
}
</script>

<style src="./admin-blog.scss" lang="scss"></style>