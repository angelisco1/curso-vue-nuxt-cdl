<template>
  <div>
    <Titulo titulo="Genera tu meme" />
    <div class="container">
      <Meme class="child-container" :meme="meme" :generador="true" />
      <form class="child-container" @submit.prevent="guardar">
        <div>
          <label for="txtArriba">Texto Arriba:</label>
          <input type="text" id="txtArriba" v-model="textoArriba">
        </div>
        <div>
          <label for="urlImg">Url Imagen:</label>
          <input type="text" id="urlImg" v-model="imagenUrl">
        </div>
        <div>
          <label for="txtAbajo">Texto abajo:</label>
          <input type="text" id="txtAbajo" v-model="textoAbajo">
        </div>
        <div>
          <label for="color">Color:</label>
          <input type="color" id="color" v-model="color">
        </div>
        <div>
          <label for="isFav">Favorito:</label>
          <input type="checkbox" id="isFav" v-model="isFav">
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      textoArriba: 'Texto arriba',
      imagenUrl: 'https://i.imgflip.com/12dxv.jpg',
      textoAbajo: 'Texto abajo',
      color: '#ffffff',
      isFav: false
    }
  },
  computed: {
    meme() {
      return {
        textoArriba: this.textoArriba,
        imagenUrl: this.imagenUrl,
        textoAbajo: this.textoAbajo,
        color: this.color,
        isFav: this.isFav,
      }
    }
  },
  methods: {
    ...mapActions({
      saveMeme: 'memes/saveMeme'
    }),
    guardar() {
      const meme = {
        textoArriba: this.textoArriba,
        imagenUrl: this.imagenUrl,
        textoAbajo: this.textoAbajo,
        color: this.color,
        isFav: this.isFav,
      }
      this.saveMeme(meme)
        .then(() => {
          this.$swal('Guardado')
            .then(() => {
              this.$router.push('/mis-memes');
            });
        });
    }
  }
}
</script>

<style scoped>
  form {
    width: 50%;
    margin: 0 auto;
  }

  form > div > label {
    width: 40%;
  }
  form > div > input {
    width: 55%;
  }
</style>
