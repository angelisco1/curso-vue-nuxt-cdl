<template>
  <div>
    <Titulo titulo="Inicio" />
    <button type="button" @click="login">{{txtLogin}}</button>
    <p>Token: {{token}}</p>
    <p>URL1: {{url}}</p>
  </div>
</template>

<script>
// import Titulo from '~/components/Titulo.vue';

export default {
  // components: {
  //   Titulo
  // },
  data() {
    return {
      url: process.env.url1
    }
  },
  computed: {
    txtLogin() {
      return this.$token.getToken() ? 'Logout' : 'Login';
    },
    token() {
      return this.$token.getToken();
    }
  },
  methods: {
    login() {
      const token = this.$token.getToken();
      if (token) {
        this.$token.setToken('')
      } else {
        this.$token.setToken(Math.random())
      }
    }
  },
  layout: 'mi-layout',
  // middleware: 'log'
}
</script>
