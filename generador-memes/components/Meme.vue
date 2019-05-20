<template>
  <div class="meme">
    <p class="textoMeme textoArriba" :style="{color: meme.color}">{{meme.textoArriba | uppercase}}</p>
    <img class="imagenMeme" :src="meme.imagenUrl" alt="imagenAlt">
    <p class="textoMeme textoAbajo" :style="{color: meme.color}">{{meme.textoAbajo | uppercase}}</p>
    <button type="button" v-if="!generador" @click="changeFav">{{txtFav}}</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    'meme': {
      type: Object,
      required: true
    },
    'generador': {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imagenAlt() {
      return 'Imagen del Meme'
    },
    txtFav() {
      if (this.meme.isFav) {
        return 'Desmarcar';
      }
      return 'Marcar';
    }
  },
  methods: {
    ...mapActions({
      favMeme: 'memes/favMeme'
    }),
    changeFav() {
      this.favMeme(this.meme)
        .then(() => {
          this.$router.push('/favs');
        });
    }
  }
}
</script>

<style scoped>
  /* img.imagenMeme {
    width: 200px;
  } */

  div.meme {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  p.textoMeme {
    font-size: 35px;
    position: relative;
    color: white;
    text-align: center;
    margin: 0;
    width: 100%;
  }

  p.textoArriba {
    top: 45px;
  }

  p.textoAbajo {
    bottom: 45px;
  }
</style>
