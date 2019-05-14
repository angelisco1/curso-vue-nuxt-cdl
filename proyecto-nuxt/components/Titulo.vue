<template>
  <div>
    <h2>{{titulo}}</h2>
    <Header />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header
  },
  props: ['titulo']
}
</script>
