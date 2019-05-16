<template>
  <div>
    <Titulo titulo="Ofertas" />
    <Oferta v-for="oferta in ofertas" :key="oferta.id" :oferta="oferta" />
  </div>
</template>

<script>
import axios from 'axios';
import Oferta from '@/components/Oferta.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Oferta
  },
  // data() {
  //   return {
  //     ofertas: []
  //   }
  // },
  computed: mapGetters({ofertas: 'ofertas'}),
  // fetch(context) {
    // const URL = 'https://fluentjobs-fa22e.firebaseio.com/trabajos.json';
    // return new Promise((resolve, reject) => {
    //   return axios.get(URL)
    //     .then(resp => {
    //       const ofertas = [];
    //       for (let id in resp.data) {
    //         ofertas.push(Object.assign({}, resp.data[id], {id: id}));
    //       }
    //       resolve({ofertas: ofertas})
    //       // reject(new Error('Error'))
    //     })
    // }).then(data => {
    //   console.log(context.store);
    //   context.store.dispatch('initOfertas', data.ofertas)
    // })
  // }
  // asyncData(context, callback) {
  // asyncData(context) {
  //   console.log(context);
  //   const URL = 'https://fluentjobs-fa22e.firebaseio.com/trabajos.json';
  //   return new Promise((resolve, reject) => {
  //     return axios.get(URL)
  //       .then(resp => {
  //         const ofertas = [];
  //         for (let id in resp.data) {
  //           ofertas.push(Object.assign({}, resp.data[id], {id: id}));
  //         }
  //         // this.ofertas = ofertas;
  //         // callback(null, {ofertas: ofertas});
  //         resolve({ofertas: ofertas})
  //         // reject(new Error('Error'))
  //       })
  //   }).catch(err => context.error(err))
  // },
  // created() {
  //   this.$store.dispatch('initOfertas', this.ofertas)
  // }

  // created() {
  //   const URL = 'https://fluentjobs-fa22e.firebaseio.com/trabajos.json';
  //   axios.get(URL)
  //     .then(resp => {
  //       const ofertas = [];
  //       for (let id in resp.data) {
  //         ofertas.push(Object.assign({}, resp.data[id], {id: id}));
  //       }
  //       this.ofertas = ofertas;
  //     })
  // }
}
</script>
