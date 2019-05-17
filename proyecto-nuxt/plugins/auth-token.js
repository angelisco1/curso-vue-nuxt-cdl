import Vue from 'vue';


const authToken = new Vue({
  data() {
    return {
      token: ''
    }
  },
  methods: {
    setToken(token) {
      this.token = token;
    },
    getToken() {
      return this.token;
    }
  }
})

export default function (context, inject) {
  inject('token', authToken);
}