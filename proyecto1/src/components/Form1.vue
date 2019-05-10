<template>
  <div>
    <h2>Form 1/2</h2>
    <input type="text" :value="nombre" @input="$emit('propCambiada', ['Form1', $event.target.value])">
    <!-- <button type="button" @click="$emit('datoCambiado', nombre)">Guardar</button> -->
    <!-- <input type="text" v-model="nombre"><button type="button" @click="guardar">Guardar</button> -->
  </div>
</template>

<script>
export default {
  props: ['nombre'],
  // data() {
  //   return {
  //     nombre: ''
  //   }
  // },
  methods: {
    guardar() {
      console.log('Guardamos ' + this.nombre)
    }
  },
  // activated() {
    // Equivale a created
    // Solo con keep-alive en el componente dinamico
  // },
  // deactivated() {
    // Equivale a destroyed
    // Solo con keep-alive en el componente dinamico
  // }
}
</script>
