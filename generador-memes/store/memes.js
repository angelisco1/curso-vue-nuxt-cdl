import axios from 'axios';

export const state = () => {
  return {
    memes: []
  }
}

export const getters = {
  memes(state) {
    return state.memes;
  },
  favMemes(state) {
    return state.memes.filter(m => m.isFav);
  }
}

export const mutations = {
  initMemes(state, payload) {
    state.memes = payload;
  },
  saveMeme(state, payload) {
    state.memes.push(payload);
  },
  updateMeme(state, payload) {
    state.memes = state.memes.map(m => {
      if (m.id === payload.id) {
        return payload;
      }
      return m;
    })
  }
}

export const actions = {
  saveMeme(context, payload) {
    return axios.post(process.env.firebaseUrl + 'memes.json', payload)
      .then(resp => {
        const id = resp.data.name;
        const meme = Object.assign({}, payload, {id: id});
        context.commit('saveMeme', meme);
      })
  },
  favMeme(context, payload) {
    console.log(payload)
    payload = Object.assign({}, payload, {isFav: !payload.isFav});
    const memeActualizado = Object.assign({}, payload)
    delete memeActualizado.id;
    console.log(memeActualizado)
    return axios.put(`${process.env.firebaseUrl}memes/${payload.id}.json`, memeActualizado)
      .then(() => {
        context.commit('updateMeme', payload);
      })
  },
  // updateMeme(context, payload) {
  //   const memeActualizado = Object.assign({}, payload);
  //   delete memeActualizado.id;
  //   return axios.put(`${process.env.firebaseUrl}memes/${payload.id}.json`, memeActualizado)
  //     .then(() => {
  //       context.commit('updateMeme', payload);
  //     })
  // }
}