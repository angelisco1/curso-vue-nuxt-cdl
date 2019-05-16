<template>
  <div>
    <Titulo titulo="Nuevo usuario" />
    <button type="button" @click="guardar">Guardar</button>
  </div>
</template>

<script>
// import Titulo from '~/components/Titulo.vue';

export default {
  // components: {
  //   Titulo
  // },
  methods: {
    guardar() {
      this.$router.push('/usuarios');
    }
  }
}
</script>
