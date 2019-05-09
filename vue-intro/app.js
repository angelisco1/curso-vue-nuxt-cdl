Vue.component('cmp-saludar', {
  template: `
    <p>Hola {{nombre}}</p>
  `,
  data() {
    return {nombre: 'Angel'}
  }
});

const cmp1 = {
  template: `
    <p>Hola {{nombre}}</p>
  `,
  // data: {
  //   nombre: 'Angel'
  // }
}

new Vue({
  el: '#ejemplo1',
  // template: `
  //   <p>Hola mundo!</p>
  // `
  // components: {
  //   'cmp-saludar': cmp1
  // }
});
