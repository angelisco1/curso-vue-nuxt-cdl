import Vue from 'vue';

Vue.directive('hover', {
  bind(el, binding, vnode) {
    let colorLetra = binding.value ? binding.value : 'yellow';
    let colorPorDefecto = 'black';
    let propiedadACambiar = 'color';

    if (binding.arg === 'fondo') {
      propiedadACambiar = 'backgroundColor';
      colorPorDefecto = 'white';
    }

    let colorAAplicar = colorLetra;
    let intervalo = null;
    // if (binding.modifiers['parpadea']) {
    //   intervalo = setInterval(() => {
    //     el.style[propiedadACambiar] = colorAAplicar;
    //     colorAAplicar = colorAAplicar===colorLetra ? colorPorDefecto : colorLetra;
    //   }, 500);
    // }

    el.addEventListener('mouseover', (event) => {
      el.style[propiedadACambiar] = colorLetra;
      if (binding.modifiers['parpadea']) {
      intervalo = setInterval(() => {
        el.style[propiedadACambiar] = colorAAplicar;
        colorAAplicar = colorAAplicar===colorLetra ? colorPorDefecto : colorLetra;
      }, 500);
    }
    });
    el.addEventListener('mouseleave', (event) => {
      el.style[propiedadACambiar] = colorPorDefecto;
      window.clearInterval(intervalo);
    });
  }
})