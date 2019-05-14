<template>
  <div>
    <h1>Todo List</h1>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: { Header },
  created() {
    this.$store.dispatch('getTareas');
  }
}
</script>
