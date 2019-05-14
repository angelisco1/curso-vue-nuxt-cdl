<template>
  <div>
    <label for="filtro">Filtro:</label>
    <input type="text" id="filtro" :value="filtro" @input="setFiltro($event.target.value)">
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  methods: mapActions(['setFiltro']),
  computed: mapGetters(['filtro'])
}
</script>
