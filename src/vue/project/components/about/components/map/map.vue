<template lang='pug'>
mixin svgIcon(className, svgId)
    svg(class=`${className} ${className}--${svgId}` )
        use(xlink:href="img/sprite/sprite.svg"+ '#' + svgId)
section.section.map
    div#map
    .contacts.map__contacts
        .sub-title.sub-title--contacts.contacts__title Контакты
        .contacts__list
            each item in [['skype', 'skype_kdn'],['envelope2', 'astahov@gmail.com'],['phone','+7 931 200 93 24'],['map_marker','Новосибирск, ул. Инская, д.14']]
                .contacts__block
                    +svgIcon(`contacts__${item[0]}`,item[0])
                    .contacts__info #{item[1]}
</template>

<script>
export default {

}
</script>
<style src="./map.scss" lang="scss"></style>