<template>
  <div>
    <img :src="oferta.imgUrl" alt="">
    <nuxt-link :to="{name: 'ofertas-ofertaId', params: {ofertaId: oferta.id}}">
      <p>{{oferta.nombre}}</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['oferta']
}
</script>
