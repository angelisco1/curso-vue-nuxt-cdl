import axios from 'axios';

export const actions = {
  nuxtServerInit(context) {
    return new Promise((resolve, reject) => {
      axios.get(process.env.firebaseUrl + 'memes.json')
        .then(resp => {
          const memes = [];
          for (let id in resp.data) {
            memes.push(Object.assign({}, resp.data[id], {id: id}))
          }
          context.commit('memes/initMemes', memes);
          resolve(true);
        })
    });
  },
}