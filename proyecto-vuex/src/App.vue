<template>
  <div>
    <h1>Vuex</h1>
    <CmpA @nuevoVal="setValor" />
    <CmpB :valor="valor" />
  </div>
</template>

<script>
import CmpA from '@/components/CmpA.vue'
import CmpB from '@/components/CmpB.vue'

export default {
  components: {
    CmpA,
    CmpB
  },
  data() {
    return {
      valor: ''
    }
  },
  methods: {
    setValor(event) {
      this.valor = event;
    }
  }
}
</script>
