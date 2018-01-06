<template lang='pug'>
mixin svgIcon(className, svgId)
    svg(class=`${className} ${className}--${svgId}` )
        use(xlink:href="img/sprite/sprite.svg"+ '#' + svgId)
.social
    ul.social__list
        - var socials = ['vk', 'github', 'in']
        each social in socials 
            li.social__icon
                .social__icon-box
                    +svgIcon('social__svg', social)
</template>

<script>
export default {

}
</script>
