<template>
  <div>
    <h2>Cmp B</h2>
    <p>Valor: {{valor}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  // props: ['valor']
  // computed: {
  //   valor() {
  //     // return this.$store.state.valor;
  //     return this.$store.getters.valorExcl;
  //   }
  // }
  // computed: mapGetters(['valor', 'valorExcl'])
  // computed: mapGetters({
  //   valor: 'valorExcl'
  // })
  computed: {
    ...mapGetters({
      valor: 'valorExcl'
    }),
    otraComputedProp() {
      return 'No tiene nada que ver con Vuex';
    }
  }
}
</script>
