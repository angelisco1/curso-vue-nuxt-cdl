import Vue from 'vue';

Vue.filter('year', (value) => {
  return value.getFullYear();
})