import Vue from 'vue';

Vue.directive('powermode', {
  bind(el, binding) {
    el.addEventListener('input', (event) => {
      let colorR = Math.floor(Math.random()*256);
      let colorG = Math.floor(Math.random()*256);
      let colorB = Math.floor(Math.random()*256);
      el.style.color = `rgb(${colorR}, ${colorG}, ${colorB})`;
      el.style.marginLeft = '5px';
      el.style.marginTop = '5px';
      setTimeout(() => {
        el.style.color = 'black';
        el.style.marginLeft = '0px';
        el.style.marginTop = '0px';
      }, 300);
    });
  }
});