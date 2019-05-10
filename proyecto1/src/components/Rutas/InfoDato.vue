<template>
  <div>
    <h3>Dato {{id}}</h3>
  </div>
</template>

<script>
export default {
  props: ['id']
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
