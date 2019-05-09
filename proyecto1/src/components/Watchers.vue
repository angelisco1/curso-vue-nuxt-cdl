<template>
  <div>
    <h1>Watchers</h1>
    <input type="text" v-model="nombre">
    <span>{{mensaje}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      mensaje: ''
    }
  },
  watch: {
    nombre(nuevoNombre, antiguoNombre) {
      // console.log(nuevoNombre, antiguoNombre);
      // Comprobar si ya se está usando el nombre
      const nombresUsados = ['Bran', 'Rickon', 'Robb', 'Arya', 'Sansa', 'Tony'];
      this.mensaje = 'Comprobando...'
      setTimeout(() => {
        this.mensaje = nombresUsados.includes(nuevoNombre) ? 'Ese nombre ya está siendo usado...' : 'OK';
      }, 600);
    }
  }
}
</script>
