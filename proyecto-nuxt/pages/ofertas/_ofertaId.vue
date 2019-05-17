<template>
  <div>
    <Titulo :titulo="tituloOferta" />
    <p>{{oferta.descripcion}}</p>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  data() {
    return {
      oferta: {}
    }
  },
  computed: {
    tituloOferta() {
      return 'Oferta: ' + this.oferta.nombre;
    }
  },
  asyncData(context) {
    // console.log(context.params.ofertaId);
    const id = context.params.ofertaId;
    // const URL = `https://fluentjobs-fa22e.firebaseio.com/trabajos/${id}.json`;
    return new Promise((resolve, reject) => {
      context.$axios.$get(`${id}.json`)
        .then(resp => {
          console.log('RESPUESTA_GET', resp);
          resolve({oferta: resp})
          // reject(new Error('Un error'))
        })
    })
    .catch(err => context.error(err))
  }
}
</script>
