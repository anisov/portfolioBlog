<template lang="pug">
.wrapper
  header.appHead
    app-header
  main.appContent
    router-view
  footer.appFooter
    app-footer
</template>

<script>
export default {
  components: {
    appHeader: require('./components/header/header'),
    //appBlog:require('./components/about/about'),
    appFooter: require('./components/footer/footer')
  }
}
</script> 