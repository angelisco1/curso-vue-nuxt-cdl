<template>
  <div :class="{completa: tarea.completa}">
    <p>{{tarea.nombre}}</p>
    <button type="button" @click="doTarea(tarea)">{{txtBtn}}</button>
    <button type="button" @click="irAForm">Editar</button>
    <button type="button" @click="deleteTarea(tarea.id)">Eliminar</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['tarea'],
  computed: {
    txtBtn() {
      return this.tarea.completa ? 'Deshacer' : 'Hacer';
    }
  },
  methods: {
    ...mapActions(['deleteTarea', 'doTarea']),
    irAForm() {
      this.$router.push({name: 'editar', params: {id: this.tarea.id}})
    }
  }
}
</script>

<style scoped>
  div.completa {
    background-color: darkgray;
  }
</style>
