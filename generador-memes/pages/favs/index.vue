<template>
  <div>
    <Titulo titulo="Mis memes favoritos" />
    <Meme v-for="meme in memes" :key="meme.id" :meme="meme" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      memes: 'memes/favMemes'
    })
  }
}
</script>