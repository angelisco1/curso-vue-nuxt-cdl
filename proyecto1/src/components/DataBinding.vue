<template>
  <div>
    <!-- <h1>Data Binding</h1>
    <h2>String Interpolation</h2>
    <p>Nombre: {{nombre}}</p>
    <h2 :class="{subrayado: btnDisabled}">Propiedades</h2> -->
    <!-- <input type="text" v-bind:disabled="btnDisabled"> -->
    <!-- <input type="text" :disabled="btnDisabled">
    <h2 :style="{color: 'green', backgroundColor: 'blue'}">Eventos</h2>
    <!-- <button type="button" v-on:click="cambiarDisabled">Cambiar btnDisabled</button> -->
    <!-- <button type="button" @click="cambiarDisabled('Un msg', $event)">Cambiar btnDisabled</button>
    <h2>Two Way Binding</h2>
    <input type="text" v-model="nombre">

    <h2>Mi 2WayBinding</h2>
    <input type="text" @input="nombre = $event.target.value" :value="nombre">

    <hr>
    <h1>Otras directivas</h1>
    <h2>Directiva: v-text</h2>
    <p v-text="nombre"></p>
    <h2>Directiva: v-html</h2>
    <ul v-html="mascotas"></ul>
    <h2>Directivas condicionales</h2>
    <p v-if="notaExamen > 5">Has aprobado</p>
    <p v-else-if="notaExamen === 5">Has aprobado raspando</p>
    <p v-else>Has suspendido</p>
    <p v-show="notaExamen < 5">Has suspendido</p>
    <h2>Directivas con listas</h2>
    <ul>
      <li v-for="(sugu, i) in sugus" :key="i">{{i}}: {{ sugu }}</li>
    </ul>
    <ul>
      <li v-for="(valor, clave, numIt) in personaje" :key="numIt">{{numIt}} <strong>{{clave}}</strong>: {{valor}}</li>
    </ul>
    <p v-for="n in 3">{{n}}</p> -->
    <h2>Mi directiva</h2>
    <p v-hover:fondo="'blue'">Este texto aparece de color azul cuando pasamos el ratón por encima</p>
    <p v-hover>Este texto aparece de color amarillo cuando pasamos el ratón por encima</p>
    <p v-hover:fondo.parpadea="'yellow'">Este texto aparece de color amarillo cuando pasamos el ratón por encima</p>
    <input type="text" v-powermode>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: 'Angel',
      btnDisabled: true,
      mascotas: ['Pez', 'Canario', 'Gato', 'Perro'].map(m => `<li>${m}</li>`).join(''),
      notaExamen: 6,
      sugus: ['azul', 'verde', 'rojo'],
      personaje: {
        nombre: 'Robb',
        apellido: 'Stark'
      }
    }
  },
  // directives: {
    // 'hover': {
    //   bind(el, binding, vnode) {
    //     let colorLetra = binding.value ? binding.value : 'yellow';
    //     let colorPorDefecto = 'black';
    //     let propiedadACambiar = 'color';

    //     if (binding.arg === 'fondo') {
    //       propiedadACambiar = 'backgroundColor';
    //       colorPorDefecto = 'white';
    //     }

    //     let colorAAplicar = colorLetra;
    //     let intervalo = null;
    //     // if (binding.modifiers['parpadea']) {
    //     //   intervalo = setInterval(() => {
    //     //     el.style[propiedadACambiar] = colorAAplicar;
    //     //     colorAAplicar = colorAAplicar===colorLetra ? colorPorDefecto : colorLetra;
    //     //   }, 500);
    //     // }

    //     el.addEventListener('mouseover', (event) => {
    //       el.style[propiedadACambiar] = colorLetra;
    //       if (binding.modifiers['parpadea']) {
    //       intervalo = setInterval(() => {
    //         el.style[propiedadACambiar] = colorAAplicar;
    //         colorAAplicar = colorAAplicar===colorLetra ? colorPorDefecto : colorLetra;
    //       }, 500);
    //     }
    //     });
    //     el.addEventListener('mouseleave', (event) => {
    //       el.style[propiedadACambiar] = colorPorDefecto;
    //       window.clearInterval(intervalo);
    //     });
    //   }
    // }
  // },
  methods: {
    cambiarDisabled(msg, event) {
      console.log('MSG', msg)
      console.log('EV', event)
      this.btnDisabled = !this.btnDisabled;
      this.nombre = '';
    }
  }
}
</script>


<style>
.subrayado {
  text-decoration: underline;
}
</style>
