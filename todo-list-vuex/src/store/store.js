import Vue from 'vue';
import Vuex from 'vuex';
import tareas from '@/store/tareas';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: [
    tareas
  ]
});