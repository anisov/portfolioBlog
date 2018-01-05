<template lang="pug">
  .tabs__block
    ul.tabs__list
      router-link(
        v-for="(tab, index) in tabs"
        :key="index"
        tag="li"
        exact-active-class="tabs__item--active"
        :to="tab.route"
      ).tabs__item
        span.tabs__link {{tab.name}}
</template>

<script>
export default {
  data() {
   return{
    tabs: [
      { name: 'Обо мне', route: '/admin.html' },
      { name: 'Блог', route: '/admin.html/admin-blog' },
      { name: 'Мои работы', route: '/admin.html/admin-works' }
    ]
   }
  }
}
</script>

<style src="./admin-tabs.scss" lang="scss"></style>