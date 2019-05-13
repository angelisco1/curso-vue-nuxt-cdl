<template>
  <div>
    <h1>Http (Axios)</h1>
    <button type="button" @click="getDatos">Get Frases</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    getDatos() {
      axios.get('http://api.icndb.com/jokes/random/3?firstName=Angel&lastName=Villalba')
      .then(resp => {
        console.log(resp.data);
      });
    }
  },
  created() {
    axios.get('http://api.icndb.com/jokes/random')
      .then(resp => {
        console.log(resp.data);
      });
  }
}
</script>
