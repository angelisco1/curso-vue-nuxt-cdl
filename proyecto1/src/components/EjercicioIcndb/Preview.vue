<template>
  <div>
    <router-link :to="{ name: 'joke', params: {id: frase.id }}">
      <p>{{frase.id}}: {{frase.joke | preview}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['frase']
}
</script>
