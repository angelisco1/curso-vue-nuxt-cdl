<template>
  <div>
    <h2>{{oferta.nombre}}</h2>
    <p>{{oferta.descripcion}}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      oferta: {}
    }
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      if(context.payload) {
        resolve({oferta: context.payload});
      } else {
        return axios.get(`https://fluentjobs-fa22e.firebaseio.com/trabajos/${context.params.id}.json`)
          .then(resp => {
            resolve({
              oferta: Object.assign(
                {},
                resp.data,
                {id: context.params.id}
              )
            });
          });
      }
    })
  }
}
</script>
