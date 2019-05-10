import Vue from 'vue';

Vue.filter('slice', (val, start, end) => {
  if (end) {
    return val.slice(start, end)
  } else {
    if (start) {
      return val.slice(start);
    }
  }
  return val;
});

Vue.filter('reverse', (value) => {
  return value.split("").reverse().join("");
})

Vue.filter('hide', (value, ocultar, caracter) => {
  caracter = caracter || '*';
  let res = value;
  if (ocultar.length > 0) {
    for (let palabra of ocultar) {
      let reg = new RegExp(palabra, 'ig');
      res = res.replace(reg, caracter.repeat(palabra.length));
    }
  }
  return res;
})