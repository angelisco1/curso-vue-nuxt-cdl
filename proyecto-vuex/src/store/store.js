import Vue from "vue";
import Vuex from "vuex";
import valor from "./valor";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  //   valor: 'Un valor'
  // },
  // getters: {
  //   valor(state) {
  //     return state.valor;
  //   },
  //   valorExcl(state) {
  //     return state.valor + '!';
  //   },
  // },
  // mutations: {
  //   setValor(state, nuevoVal) {
  //     state.valor = nuevoVal;
  //   }
  // },
  // actions: {
  //   setValor(context, nuevoVal) {
  //     setTimeout(() => {
  //       context.commit('setValor', nuevoVal)
  //     }, 2000)
  //   }
  // }
  modules: [
    valor
  ]
})