<template>
  <div>
    <h3>Dato {{id}}</h3>
  </div>
</template>

<script>
export default {
  props: ['id'],
  beforeRouteEnter(to, from, next) {
    next(confirm('Estas logueado??'));
  },
  beforeRouteUpdate(to, from, next) {
    next(confirm('Estas logueado y tienes permisos para ver la info??'));
  }
  // data() {
  //   return {
  //     id: ''
  //   }
  // },
  // watch: {
  //   '$route'() {
  //     this.id = this.$route.params.id;
  //   }
  // },
  // created() {
  //   this.id = this.$route.params.id;
  // }
}
</script>
