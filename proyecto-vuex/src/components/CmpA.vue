<template>
  <div>
    <h2>Cmp A</h2>
    <div>
      <label for="valor">Valor:</label>
      <!-- <input type="text" @change="$emit('nuevoVal', $event.target.value)"> -->
      <!-- <input type="text" @change="$store.state.valor = $event.target.value"> -->
      <input type="text" @change="setValor($event.target.value)">
      <button type="button" @click="mostrarValor">Mostrar valor</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';
export default {
  // methods: {
  //   setValor(val) {
  //     // this.$store.commit('setValor', val)
  //     this.$store.dispatch('setValor', val)
  //   }
  // }
  // methods: mapMutations(['setValor'])
  computed: mapGetters(['valor']),
  methods: {
    ...mapActions(['setValor']),
    mostrarValor() {
      console.log(process.env.URL);
      console.log('El valor es ' + this.valor);
    }
  }
}
</script>
