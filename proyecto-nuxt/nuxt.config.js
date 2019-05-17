import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    titleTemplate: '%s - Mi App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'keywords', name: 'keywords', content: 'nuxt, ejemplo, axios, aplicacion de lo que sea' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    style: [
      { cssText: 'a { color: white; }' }
    ],
    script: [
      { src: '/mi-script.js' }
    ],
    htmlAttrs: {
      lang: 'es'
    },
    bodyAttrs: {
      class: 'clase1'
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: 'blue',
    height: '10px',
    failedColor: 'white'
  },

  loadingIndicator: {
    color: 'orange',
    background: 'black',
    name: 'folding-cube'
  },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/style.css'
  ],

  env: {
    url1: process.isDev ? 'Desarrollo' : 'Produccion' //'Mi URL'
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/componentes-globales.js',
    '~/plugins/filtros.js',
    '~/plugins/auth-token.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: 'https://fluentjobs-fa22e.firebaseio.com/trabajos'
  },

  router: {
    middleware: 'log'
    // middleware: ['log', 'auth']
  },

  server: {
    // port: 4200
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // config.resolve.extensions = ['.js'];
    }
  }
}