<template lang='pug'>
mixin svgIcon(className, svgId)
    svg(class=`${className} ${className}--${svgId}` )
        use(xlink:href="/img/sprite/sprite.svg"+ '#' + svgId)
section.section.reviews
    .title-block.reviews__title
        +svgIcon('title-block__svg','about_header')
        .title-block__title.main-title Что обо мне говорят
    .reviews__comment
        .reviews__comment-col
            .reviews__quotes 
                <i class="reviews__quotes-text fa fa-quote-left" aria-hidden="true"></i>
            .reviews__block-img
                img.reviews__img(src="/img/work/comment.jpg", alt="")
            .reviews__block-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!
            .reviews__author Ковальчук Дмитрий
                p.reviews__author-info — основатель Loftschool
        .reviews__comment-col
            .reviews__quotes 
                <i class="reviews__quotes-text fa fa-quote-left" aria-hidden="true"></i>
            .reviews__block-img
                img.reviews__img(src="/img/work/comment1.jpg", alt="")
            .reviews__block-text Этот код выдержит любые испытания. Только пожалуйста, не загружается сайт на слишком старых браузерах!
            .reviews__author Сабанцев Владимир
                p.reviews__author-info — преподаватель
    .form-contact.reviews__form
        form.form-contact__send(method="post")
            .form-contact__title
                .sub-title.sub-title--big Связаться со мной
            input(type="text", name='name', placeholder ='Имя').form-contact__name
            input(type="email", name="email" placeholder ='Email').form-contact__email
            textarea( name="comment" placeholder ='Ваше сообщение').form-contact__mes
            .form-contact__btns
                button.send-button(type="submit") Отправить
                button(type="reset").send-reset Очистить
    .reviews__up
        +svgIcon('reviews__up-svg','arrow_down')    
</template>

<script>
export default {

}
</script>

<style>

</style>
