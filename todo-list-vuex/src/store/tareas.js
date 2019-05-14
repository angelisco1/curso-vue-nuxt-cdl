import axios from 'axios';
import config from '@/config';

// const URL = 'https://todo-list-603ba.firebaseio.com/tareas-vuex/angel';
const URL = config.FB_URL

const state = {
  tareas: [],
  filtro: ''
}

const getters = {
  tareasFiltradas(state) {
    return state.tareas.filter(t => t.nombre.includes(state.filtro));
  },
  tareas(state) {
    return state.tareas;
  },
  tareasSinCompletar() {
    return state.tareas.filter(t => !t.completa);
  },
  tarea(state) {
    return (id) => {
      return state.tareas.find(t => t.id === id);
    }
  },
  filtro(state) {
    return state.filtro;
  }
}

const mutations = {
  setTareas(state, payload) {
    state.tareas = payload;
  },
  addTarea(state, payload) {
    state.tareas.push(payload);
  },
  updateTarea(state, payload) {
    state.tareas = state.tareas.map(t => {
      if (t.id === payload.id) {
        return payload;
      }
      return t;
    })
  },
  deleteTarea(state, payload) {
    state.tareas = state.tareas.filter(t => t.id !== payload);
  },
  setFiltro(state, payload) {
    state.filtro = payload;
  }
}


const actions = {
  addTarea(context, payload) {
    return axios.post(URL+'.json', payload)
      .then(resp => {
        const id = resp.data.name;
        context.commit('addTarea', Object.assign({}, payload, {id: id}))
      })
  },
  getTareas(context) {
    axios.get(URL+'.json')
      .then(resp => {
        const tareas = [];
        for (let id in resp.data) {
          tareas.push({id: id, ...resp.data[id]});
        }
        context.commit('setTareas', tareas);
      });
  },
  deleteTarea(context, payload) {
    axios.delete(`${URL}/${payload}.json`)
      .then(() => {
         context.commit('deleteTarea', payload);
      })
  },
  doTarea(context, payload) {
    const tarea = Object.assign({}, payload, {completa: !payload.completa});
    axios.put(`${URL}/${payload.id}.json`, tarea)
      .then(() => {
        context.commit('updateTarea', tarea);
      })
  },
  updateTarea(context, payload) {
    // const tarea = Object.assign({}, payload, {completa: !payload.completa});
    return axios.put(`${URL}/${payload.id}.json`, payload)
      .then(() => {
        context.commit('updateTarea', payload);
      })
  },
  setFiltro(context, payload) {
    context.commit('setFiltro', payload);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}