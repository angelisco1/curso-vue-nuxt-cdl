<template>
  <div>
    <Titulo titulo="Todos mis memes" />
    <Meme v-for="meme in memes" :key="meme.id" :meme="meme" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      memes: 'memes/memes'
    })
  }
}
</script>
