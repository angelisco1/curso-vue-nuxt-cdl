import Vue from 'vue';

Vue.filter('date', (value) => {
  return (value instanceof Date) ? value.getFullYear() : new Date().getFullYear();
})

Vue.filter('uppercase', (value) => {
  return value.toUpperCase();
})