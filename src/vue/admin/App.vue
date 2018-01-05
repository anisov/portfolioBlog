<template lang="pug">
  .admin
    .header
      app-header
    .tabs
      tabs
    .content
      router-view
</template>

<script>
export default {
  components: {
    appHeader: require('./components/header/header'),
    tabs: require('./components/tabs/tabs'),
    about: require('./components/about/about')
  }
}
</script>