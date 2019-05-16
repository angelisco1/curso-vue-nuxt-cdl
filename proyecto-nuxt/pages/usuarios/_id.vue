<template>
  <div>
    <h3>Usuario {{$route.params.id}}</h3>
  </div>
</template>

<script>
export default {
  validate(context) {
    // console.log('Pasa por aqui', context);
    // return context.params.id.match(/[0-9]+/);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (context.params.id.match(/^\d+$/)) {
          resolve(true)
        } else {
          reject(new Error('No existe ese usuario'))
        }
      }, 1500)
    })
  },
  beforeRouteEnter(to, from, next) {
    // next(confirm('Estas logueado??'));
    next(true);
  }
}
</script>
