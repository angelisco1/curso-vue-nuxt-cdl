<template>
  <div>
    <h2>Form</h2>
    <form @submit.prevent="getDatos">
      <div>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model.trim="nombre">
      </div>
      <div>
        <label for="apellidos">Apellidos:</label>
        <input type="text" id="apellidos"  v-model.trim="apellidos">
      </div>
      <div>
        <label for="num">Num. frases:</label>
        <input type="number" id="num"  v-model.number="num">
      </div>
      <button type="submit">Get datos</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      apellidos: '',
      num: 1
    }
  },
  methods: {
    getDatos() {
      let txtQuery = '';
      if (this.nombre && this.apellidos) {
        txtQuery = `?firstName=${this.nombre}&lastName=${this.apellidos}`
      } else if (this.nombre) {
        txtQuery = `?firstName=${this.nombre}`
      } else if (this.apellidos) {
        txtQuery = `?lastName=${this.apellidos}`
      }


      this.$emit('getDatos', {
        num: this.num,
        query: txtQuery
      })
    }
  }
}
</script>
