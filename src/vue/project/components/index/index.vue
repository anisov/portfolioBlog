<template lang='pug'>
mixin svgIcon(className, svgId)
    svg(class=`${className} ${className}--${svgId}` )
        use(xlink:href="/img/sprite/sprite.svg"+ '#' + svgId)
section.welcome.webgl
    <canvas class="webgl-canvas"></canvas>
    a.welcome__auth.js-click-change(href="") Авторизоваться
    .entry.js-change-side
        .entry__img
        .entry__name Владимир Астахов
        .entry__desc Личный сайт веб разработчика
        .welcome__socials
            app-social
        .entry__tabs
            ul.entry__tab-list
                each tab in [['Мои работы', './work.html'],['Обо мне', './about.html'],['Блог', './blog.html']]
                    li.entry__tab-elem
                        a.entry__tab-link(href=`${tab[1]}`) #{tab[0]}    
    .entry.entry--back-side.js-change-side
        form.entry__form
            .entry__auth-title Авторизуйтесь
            .entry__elem
                .entry__decorate
                    +svgIcon('entry__svg-auth', 'login')
                input.entry__login(placeholder='Логин')
            .entry__elem
                .entry__decorate
                    +svgIcon('entry__svg-auth', 'password')
                input.entry__password(type = 'password' placeholder='Пароль')
            label.entry__checkbox()
                input(type="checkbox" name='bool' value='True').entry__input-checkbox
                span.entry__checkbox-styled
                span.entry__checkbox-title Я человек
            .entry__robot Вы точно не робот?
            .entry__answer
                label.entry__radio()
                    input(type="radio" name='bool' value='True').entry__input-radio
                    span.entry__radio-styled
                    span.entry__radio-title Да 

                label.entry__radio()
                    input(type="radio" name='bool' value='False').entry__input-radio
                    span.entry__radio-styled
                    span.entry__radio-title Не уверен  
            .entry__tabs
                ul.entry__tab-list
                    li.entry__auth-botton
                        a.entry__tab-link.js-click-change(href='./') На главную
                    li.entry__auth-botton
                        button(type="submit").entry__submit Войти                  
    footer.welcome__footer © Владимир Астахов | создано с любовью в LoftSchool | 2016       
</template>

<script>
export default {
    components: {
        appSocial: require('../social/social')
    }
}
</script>
