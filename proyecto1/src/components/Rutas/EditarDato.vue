<template>
  <div>
    <h3>Editar dato con id {{id}}</h3>
    <p @click="datosGuardados = !datosGuardados">Datos guardados: {{datosGuardados}}</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      datosGuardados: false
    }
  },
  created() {
    if (this.$route.query && this.$route.query.datosGuardados) {
      this.datosGuardados = this.$route.query.datosGuardados;
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.datosGuardados) {
      next(true);
    } else {
      next(confirm('Si sales perderas los datos. Que quieres hacer??'))
    }
  }
}
</script>
