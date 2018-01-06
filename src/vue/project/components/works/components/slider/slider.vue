<template lang='pug'>
mixin svgIcon(className, svgId)
    svg(class=`${className} ${className}--${svgId}` )
        use(xlink:href="img/sprite/sprite.svg"+ '#' + svgId)
.slider
    .slider__info
        .slider__title
            .sub-title Сайт школы онлайн Образования
        .slider__technologies HTML , CSS, JAVASCRIPT
        .slider__elem
            .slider__decorate
                +svgIcon('slider__svg-link', 'link')
            a.slider__button(href='/') Посмотреть сайт
    .slider__display
        .slider__work.slider__work--active
            img.slider__site(src="/img/work/work-5.png", alt="Моя работа")
        .slider__work
            img.slider__site(src="/img/work/work-1.png", alt="Моя работа")                    
        .slider__work
            img.slider__site(src="/img/work/work-2.png", alt="Моя работа")  
        .slider__work
            img.slider__site(src="/img/work/work-3.png", alt="Моя работа")  
        .slider__work
            img.slider__site(src="/img/work/work-4.png", alt="Моя работа")  
    .slider__btns
        div.slider__btn-prev 
            .slider__btn-work.slider__btn-work--active
                img.slider__site.slider__site--cover(src="/img/work/work-1.png", alt="Моя работа")      
            .slider__bg-prev  
                +svgIcon('slider__svg-down', 'portf_arrow_down')
        div.slider__btn-next
            .slider__btn-work.slider__btn-work--active
                img.slider__site.slider__site--cover(src="/img/work/work-4.png", alt="Моя работа")          
            .slider__bg-next 
                +svgIcon('slider__svg-up', 'portf_arrow_up') 

</template>

<script>
export default {

}
</script>

<style>

</style>
