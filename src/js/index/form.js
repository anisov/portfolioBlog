import Vue from 'vue'    
import { Validator } from 'simple-vue-validator'
if (document.querySelector('.js-form-send')) {
  new Vue ({
      el: '.js-form-send',
      mixins: [require('simple-vue-validator').mixin],
      validators: {
        name(value){
          return Validator.value(value).required("Поле должно быть заполнено");
        },
        email(value){
          return Validator.value(value).required("Поле должно быть заполнено").email("Введите корректный email");
        },
        comment(value){
          return Validator.value(value).required("Поле должно быть заполнено");
        }
      },
      data:{
          name:'',
          email:'',
          comment:''
      },
      computed:{
      },
      methods:{
          sendData() {
              this.$validate().then(success => {
                if (success){
                  let formData = new FormData()
                  formData.append('name', this.name)
                  formData.append('email', this.email)
                  formData.append('comment', this.comment)
                  console.log('Данные отправлены')
                  this.name=''
                  this.email=''
                  this.commetn=''
                  this.validation.reset();
                }else{
                }
              })
            }
      }
  })
}