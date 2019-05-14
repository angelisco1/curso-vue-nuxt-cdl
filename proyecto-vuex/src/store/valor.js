const state = {
  valor: 'Un valor'
}

const getters = {
  valor(state) {
    return state.valor;
  },
  valorExcl(state) {
    return state.valor + '!';
  },
}

const mutations = {
  setValor(state, nuevoVal) {
    state.valor = nuevoVal;
  }
}

const actions = {
  setValor(context, nuevoVal) {
    setTimeout(() => {
      context.commit('setValor', nuevoVal)
    }, 2000)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}


// https://todo-list-603ba.firebaseio.com/tareas-vuex/[nombre].json