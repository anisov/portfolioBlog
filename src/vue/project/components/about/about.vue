<template lang='pug'>
div.content
    section.section.about
        .triangle.about__triangle
            app-tr
        .about__left
            .about__left-title
                .main-title.about__title Обо мне
            .about__left-content
                .about__user-photo: img.about__my-img(src="img/about/my-foto.jpg", alt="Я")
                .about__user-title
                    .sub-title Кто я
                .about__user-desc
                    p Я веб разработчик из Новосибирска. Мне 27 лет. Я занимаюсь разработкой современных сайтов и приложений. Мне нравится делать интересные и современные проекты.
                    p Этот сайт я сделал в рамках обучения в Школе онлайн образования LoftSchool. Чуть позже я освежу в нём свой контент. А пока посмотрите,как тут всё классно и красиво!
        .about__right
            .about__right-title
                .sub-title Чем я могу быть вам полезен
            .about__skills
                .about__skills-desc Больше всего меня привлекет Frontend разработка, но я также знаком и могу решать не сложные задачи на Backend. Но давайте по порядку.
                .about__skills-block
                    app-skills-list
    app-map

</template>

<script>
//import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
    data() {
        return {
            //skillsTypes: ['Frontend', 'Workflow', 'Backend'],
        }
    },
    computed:{
       // ...mapGetters(['skills'])
    },
    methods: {
       // ...mapActions(['fetchSkills'])
    },
    created() {
       //    this.fetchSkills();
    },
    components: {
        appMap: require('./components/map/map'),
        appSkillsList: require('./components/skillsLIst/skillsList'),
        appTr: require('./components/triangle/tr'),
        
    }
}
</script>
<style src="./about.scss" lang="scss"></style>