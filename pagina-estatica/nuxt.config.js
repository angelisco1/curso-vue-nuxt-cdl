import pkg from './package'
import axios from 'axios';

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },

  generate: {
    routes: function() {
      return new Promise((resolve, reject) => {
        return axios.get('https://fluentjobs-fa22e.firebaseio.com/trabajos.json')
          .then(resp => {
            const ofertas = [];
            for (let id in resp.data) {
              ofertas.push({ route: `/ofertas/${id}`, payload: resp.data[id]});
            }
            resolve(ofertas);
          });
      })
    }
  }
}
