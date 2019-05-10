import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/animate.css';
import VeeValidate, { Validator } from 'vee-validate';

Vue.config.productionTip = false

// Aquí cosas globales (componentes, filtros...)
import '@/directivas/hover';
import '@/directivas/powermode';
import '@/filters/filters';


Vue.use(VeeValidate);

Validator.extend('esStark', {
  getMessage(campo) {
    return 'No es Stark';
  },
  validate(campo) {
    return ['arya', 'sansa', 'rickon', 'robb', 'bran', 'tony'].includes(campo);
  }
});

export const EventBus = new Vue({
  methods: {
    avisar(val) {
      this.$emit('cambiaNombre1', val);
    },
    inicializarDatosForm(data) {
      this.$emit('inicializar', data);
    },
    actualizarCV(data) {
      this.$emit('actualizarCv', data);
    }
  }
});


// Vue.component()

new Vue({
  render: h => h(App)
}).$mount('#app')
