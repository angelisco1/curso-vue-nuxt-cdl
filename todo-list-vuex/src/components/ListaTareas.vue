<template>
  <div>
    <h2>Lista tareas</h2>
    <Filtro />
    <button type="button" @click="mostrarTodas = !mostrarTodas">Mostrar incompletas</button>
    <div v-if="mostrarTodas">
      <Tarea v-for="tarea in tareasFiltradas" :key="tarea.id" :tarea="tarea" />
    </div>
    <div v-else>
      <Tarea v-for="tarea in tareasSinCompletar" :key="tarea.id" :tarea="tarea" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Tarea from '@/components/Tarea.vue';
import Filtro from '@/components/Filtro.vue';

export default {
  components: { Tarea, Filtro },
  data() {
    return {
      mostrarTodas: true
    }
  },
  computed: {
    ...mapGetters(['tareas', 'tareasSinCompletar', 'tareasFiltradas'])
  }
}
</script>
