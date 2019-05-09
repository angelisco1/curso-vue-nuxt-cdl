import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/animate.css';

Vue.config.productionTip = false

// Aquí cosas globales (componentes, filtros...)
import '@/directivas/hover.js';
import '@/directivas/powermode.js';

Vue.filter('slice', (val, start, end) => {
  if (end) {
    return val.slice(start, end)
  } else {
    if (start) {
      return val.slice(start);
    }
  }
  return val;
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
