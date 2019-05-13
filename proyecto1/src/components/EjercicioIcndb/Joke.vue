<template>
  <div>
    <p>Id: {{frase.id}}</p>
    <p>Frase: {{frase.joke}}</p>
    <p>Categorias: {{categorias}}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  // props: ['id'],
  data() {
    return {
      frase: {}
    }
  },
  computed: {
    categorias() {
      if (this.frase.categories) {
        return this.frase.categories.join(', ');
      }
      return 'No tiene categorias'
    }
  },
  created() {
    const idFrase = this.$route.params.id;
    axios.get('http://api.icndb.com/jokes/'+idFrase)
      .then(resp => {
        this.frase = resp.data.value;
      })
  }
}
</script>
