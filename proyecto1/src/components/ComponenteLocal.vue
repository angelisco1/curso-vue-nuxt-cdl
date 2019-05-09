<template>
  <h1 v-hover.parpadea>Componente local -> {{nombre}}</h1>
</template>

<script>
import { EventBus } from '@/main';

export default {
  data() {
    return {
      nombre: 'Esperando eventos...'
    }
  },
  created() {
    EventBus.$on('cambiaNombre1', (event) => {
      this.nombre = event.val;
    })
  },
  beforeDestroy() {
    EventBus.$off('cambiaNombre1')
  }
}
</script>



<style scoped>
  h1 {
    color: orange;
  }
</style>
