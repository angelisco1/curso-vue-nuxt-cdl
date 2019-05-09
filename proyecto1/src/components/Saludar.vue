<template>
  <div>
    <p>Hola {{nombre}}</p>
    <button type="button" @click="avisarCambio">Cambia nombre</button>
  </div>
</template>

<script>
import { EventBus } from '@/main';

export default {
  // props: [
  //   'nombre'
  // ]
  props: {
    nombre: {
      type: String,
      // default: 'Mundo!'
      required: true,
      validator(nombre) {
        // return ['Angel', 'Sara', 'David'].includes(nombre);
        // return ['Angel', 'Sara'].includes(nombre);
        const nombres = ['Angel', 'Sara', 'David'];
        const reg = new RegExp(`(${nombres.join('|')})!*`, 'gi');
        return nombre.match(reg);
      }
    },
    pos: Number
    // Boolean, Array, Object
  },
  methods: {
    avisarCambio() {
      // this.$emit('cambiaNombre', {pos: this.pos, val: this.nombre+'!'});
      EventBus.avisar({pos: this.pos, val: this.nombre+'!'});
    }
  }
}
</script>
