<template>
  <div>
    <h1>Nuevo dato</h1>
    <button type="button" @click="guardar">Guardar</button>
  </div>
</template>

<script>
export default {
  methods: {
    guardar() {
      // this.$router.push('/');
      this.$router.push({name: 'inicio'});
      // this.$router.push({name: 'inicio', params: {param: value}});
    }
  }
}
</script>
