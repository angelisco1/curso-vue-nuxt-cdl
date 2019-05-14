import Vue from 'vue'
import App from './App.vue'
import store from '@/store/store';

Vue.config.productionTip = false

// https://cli.vuejs.org/guide/mode-and-env.html#using-env-variables-in-client-side-code
// console.log(process.env.VUE_APP_URL);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
