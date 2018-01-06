<template lang='pug'>
footer.footer
    .footer__one
        .footer__col 
            .footer__desc   Этот сайт я сделал в рамках обучения в Школе онлайн образования LoftSchool. 
        .footer__col
            .footer__links 
                .footer__menu
                    ul.footer__list-menu
                        router-link(
                            v-for="(tab, index) in tabs"
                            :key="index"
                            tag="li"
                            exact-active-class=""
                            :to="tab.route"
                        ).footer__menu-elem 
                            a.footer__menu-link() {{tab.name}}
                .footer__social
                    appSocial           
        .footer__col  
            .footer__quote Всегда пишите код так, будто 
                |сопровождать его будет склонный к насилию психопат, который знает, где вы живете 
                p.footer__auther — Martin Golding   
    .footer__two © Владимир Астахов | Создано с любовью в LoftSchool | 2016 
</template>

<script>
export default {
    data() {
        return{
            tabs: [
                { name: 'Обо мне', route: '/project.html' },
                { name: 'Блог', route: '/project.html/blog' },
                { name: 'Мои работы', route: '/project.html/works' },
                { name:  'Авторизация', route: '/' }
            ]
        }
    },
    components: {
        appSocial: require('../social/social')
    }
}
</script>