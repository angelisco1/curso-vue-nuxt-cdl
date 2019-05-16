// import Vuex from 'vuex';
// import axios from 'axios';

export const state = () => {
  return {
    ofertas: []
  }
}

export const getters = {
  ofertas(state) {
    console.log('GETTER', state);
    return state.ofertas;
  }
}

export const mutations = {
  initOfertas(state, payload) {
    console.log('MUTATIONS')
    state.ofertas = payload;
  }
}

export const actions = {
  initOfertas(context, payload) {
    context.commit('initOfertas', payload);
  },
  nuxtServerInit(context) {
    const URL = 'https://fluentjobs-fa22e.firebaseio.com/trabajos.json';
    console.log(this.$axios)
    return new Promise((resolve, reject) => {
      return this.$axios.$get(URL)
      .then(resp => {
          console.log(resp);
          const ofertas = [];
          for (let id in resp) {
            ofertas.push(Object.assign({}, resp[id], {id: id}));
          }
          resolve({ofertas: ofertas})
          // reject(new Error('Error'))
        })
    }).then(data => {
      context.commit('initOfertas', data.ofertas)
    })
  }
}


// const createStore = () => {
//   return new Vuex.Store({
//     state: {
//       ofertas: []
//     },
//     getters: {
//       ofertas(state) {
//         return state.ofertas;
//       }
//     },
//     mutations: {
//       initOfertas(state, payload) {
//         state.ofertas = payload;
//       }
//     },
//     actions: {
//       initOfertas(context, payload) {
//         context.commit('initOfertas', payload);
//       }
//     },
//   });
// };

// export default createStore;