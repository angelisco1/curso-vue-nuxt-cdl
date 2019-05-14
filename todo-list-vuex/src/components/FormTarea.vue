<template>
  <div>
    <h2>{{titulo}}</h2>
    <form @submit.prevent="guardar">
      <div>
        <label for="nombre">Nombre:</label>
        <input type="text" v-model="nombre">
      </div>
      <div>
        <label for="completa">Completada?:</label>
        <input type="checkbox" v-model="completa">
      </div>
      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      nombre: '',
      completa: false,
      id: '',
      esNueva: true
    }
  },
  computed: {
    ...mapGetters(['tarea']),
    titulo() {
      return this.esNueva ? 'Nueva tarea' : 'Editando tarea';
    }
  },
  methods: {
    ...mapActions(['addTarea', 'updateTarea']),
    guardar() {
      const tarea = {nombre: this.nombre, completa: this.completa};
      if (this.esNueva) {
        this.addTarea(tarea)
          .then(() => {
            this.$router.push({name: 'index'});
          });
      } else {
        this.updateTarea(Object.assign({}, tarea, {id: this.id}))
          .then(() => {
            this.$router.push({name: 'index'});
          });
      }
    }
  },
  created() {
    this.esNueva = !this.$route.params.id;
    if (!this.esNueva) {
      const tarea = this.tarea(this.$route.params.id);
      this.nombre = tarea.nombre;
      this.completa = tarea.completa;
      this.id = tarea.id;
    }
  }
}
</script>
