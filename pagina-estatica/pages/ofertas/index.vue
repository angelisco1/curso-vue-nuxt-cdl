<template>
  <div>
    <h2>Últimas ofertas</h2>
    <ul>
      <li v-for="oferta in ofertas" :key="oferta.id"><nuxt-link :to="{name: 'ofertas-id', params: {id: oferta.id}}">{{oferta.nombre}}</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      ofertas: []
    }
  },
  asyncData() {
    return new Promise((resolve, reject) => {
      return axios.get('https://fluentjobs-fa22e.firebaseio.com/trabajos.json')
        .then(resp => {
          const ofertas = [];
          for (let id in resp.data) {
            ofertas.push(Object.assign({}, resp.data[id], {id: id}));
          }
          resolve({ofertas});
        });
    })
  }
}
</script>
