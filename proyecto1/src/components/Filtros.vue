<template>
  <div>
    <h1>Filtros</h1>
    <p>{{nombre}}</p>
    <p>{{nombre | uppercase}}</p>
    <p>{{nombre | uppercase | slice(2, 4)}}</p>
    <p>{{num}}</p>
    <p>{{num | doble}}</p>
    <p>{{num | doble(3, 4)}}</p>
    <input type="text" v-model="letra">
    <ul>
      <!-- <li v-for="(color, pos) in colores | filtro('r')" :key="pos">{{color}}</li> -->
      <li v-for="(color, pos) in coloresFiltrados" :key="pos">{{color}}</li>
    </ul>
    <p>{{ 'Hola mundo' | reverse }}</p>
    <p>{{ 'No llevare corona, no alcanzare la gloria. Vivire y morire en mi puesto. Soy la espada en la oscuridad. Soy el vigilante del Muro. Soy el fuego que arde contra…​' | hide(['no', 'morire']) }}</p>
    <p>{{ 'No llevare corona, no alcanzare la gloria. Vivire y morire en mi puesto. Soy la espada en la oscuridad. Soy el vigilante del Muro. Soy el fuego que arde contra…​' | hide(['no', 'morire'], '-') }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: 'Angel',
      num: 2,
      colores: ['azul', 'rojo', 'verde'],
      letra: 'r'
    }
  },
  computed: {
    coloresFiltrados() {
      return this.colores.filter(i => i.includes(this.letra));
    },
  },
  filters: {
    uppercase(val) {
      // console.log(val);
      return val.toUpperCase();
    },
    // slice(val, start, end) {
    //   if (end) {
    //     return val.slice(start, end)
    //   } else {
    //     if (start) {
    //       return val.slice(start);
    //     }
    //   }
    //   return val;
    // },
    doble(val, suma, resta) {
      let res = val*2;
      if (suma) {
        res += suma;
      }
      if (resta) {
        res -= resta;
      }
      return res;
    }
  }
}
</script>
