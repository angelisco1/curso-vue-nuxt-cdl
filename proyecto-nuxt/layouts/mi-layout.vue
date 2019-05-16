<template>
  <div>
    <Header />
    <nuxt />
    <p>Creada por Ángel Villalba | {{new Date() | year}} </p>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  components: {
    Header
  }
}
</script>
