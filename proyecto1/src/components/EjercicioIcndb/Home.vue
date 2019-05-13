<template>
  <div>
    <h2>Inicio</h2>
    <Form @getDatos="getFrases" />
    <Preview v-for="frase in frases" :key="frase.id" :frase="frase" />
  </div>
</template>

<script>
import axios from 'axios';
import Form from './Form';
import Preview from './Preview';

export default {
  components: {
    Form,
    Preview
  },
  data() {
    return {
      nombre: '',
      apellidos: '',
      num: 1,
      frases: []
    }
  },
  methods: {
    getFrases(datos) {
      axios.get(`http://api.icndb.com/jokes/random/${datos.num}${datos.query}`)
        .then(resp => {
          console.log(resp.data);
          this.frases = resp.data.value;
        });
    }
  },
  created() {
    this.getFrases({num: this.num, query: ''});
    // axios.get(`http://api.icndb.com/jokes/random/${this.num}`)
    //   .then(resp => {
    //     console.log(resp.data);
    //     this.frases = resp.data.value;
    //   });
  }
}
</script>
