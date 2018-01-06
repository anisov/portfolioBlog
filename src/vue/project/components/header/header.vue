<template lang='pug'>
section.section.promo.webgl
    mixin svgIcon(className, svgId)
        svg(class=`${className} ${className}--${svgId}` )
            use(xlink:href="img/sprite/sprite.svg"+ '#' + svgId)
    <canvas class="webgl-canvas"></canvas>
    header.header
        .header__left
            app-social
        .header__short-menu
            .short-menu        
    .promo__block
        .promo__img: img.promo__my-img(src="/img/welcome/people-one.jpg", alt="Я")
        .promo__name Владимир Астахов
        .promo__desc Личный сайт веб разработчика

    .promo__down 
        +svgIcon('svg-down','arrow_down')
</template>

<script>
export default {
    components: {
        appSocial: require('../social/social')
    }
}
</script>
