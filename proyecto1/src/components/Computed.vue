<template>
  <div>
    <h1>Computed Props</h1>
    <p>Nombre y apellidos: {{nombre}} {{apellido}}</p>
    <p>Nombre y apellidos: {{nombreCompleto}}</p>
    <!-- <p>Nombre y apellidos: {{getNombreCompleto()}}</p> -->
    <p>Prop desestructurada: {{otroNombreCompleto}}</p>
    <button type="button" @click="otroNombreCompleto = 'Bran Stark'">Cambiar nombre</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      nombre: 'Arya',
      apellido: 'Stark'
    }
  },
  methods: {
    // getNombreCompleto() {
    //   return `${this.nombre} ${this.apellido}`;
    // }
  },
  computed: {
    nombreCompleto() {
      return `${this.nombre} ${this.apellido}`;
    },
    otroNombreCompleto: {
      get() {
        return `${this.nombre} ${this.apellido}!`;
      },
      set(val) {
        const [nombre, apellido] = val.split(' ');
        this.nombre = nombre;
        this.apellido = apellido;
      }
    }
  }
}
</script>
