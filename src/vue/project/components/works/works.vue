<template lang='pug'>
mixin svgIcon(className, svgId)
    svg(class=`${className} ${className}--${svgId}` )
        use(xlink:href="img/sprite/sprite.svg"+ '#' + svgId)
.content
    section.section.work
        .triangle.work__triangle
            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 890 85" preserveaspectratio="none" class="traingle">
                <polygon class = "triangle__work" points="0,0   0,85   445.100,85   445.100,75.1"></polygon>
                <polygon class = "triangle__work" points="890,0   890,85   445,85   445,74.9999"></polygon>
            </svg>
        .work__info 
            .title-block.title-block--size.work__title
                +svgIcon('title-block__svg','works_header')
                .title-block__title.main-title Мои работы        
        app-slider
    app-reviews
           
</template>

<script>
export default {
    components: {
        appSlider: require('./components/slider/slider'),
        appReviews: require('./components/reviews/reviews')
    }
}
</script>

<style>

</style>
