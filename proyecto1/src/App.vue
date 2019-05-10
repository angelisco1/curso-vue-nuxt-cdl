<template>
  <div>
    <!-- <link href="https://unpkg.com/animate.css@3.5.1/animate.min.css" rel="stylesheet" type="text/css"> -->
    <!-- <h1>Título</h1>
    <p>Un parrafo</p> -->
    <!-- <transition name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
      <ComponenteLocal v-if="mostrar" />
    </transition>
      <button type="button" @click="mostrar = !mostrar">Destruir componente local</button> -->
    <!-- <DataBinding /> -->
    <!-- <Computed /> -->
    <!-- <Watchers /> -->
    <!-- <Saludar v-for="(nombre, i) in nombres" :key="i" :nombre="nombre" :pos="i" @cambiaNombre="cambiarNombre" /> -->
    <!-- <Saludar /> -->
    <!-- <Ejercicio /> -->
    <!-- <Card>
      <div slot="header">
        <h1>Título</h1>
        <hr>
      </div>
      <img slot="content" :src="require('@/assets/meteor.png')" width="100px" alt="">
    </Card> -->
    <!-- <Card>
      <div slot="header">
        <h1>Título</h1>
        <hr>
      </div>
    </Card> -->
    <!-- <Filtros /> -->
    <!-- <Formularios /> -->
    <!-- <Dinamicos /> -->
    <CmpRouting />
  </div>
</template>

<script>
import ComponenteLocal from '@/components/ComponenteLocal.vue';
import DataBinding from '@/components/DataBinding.vue';
import Computed from '@/components/Computed.vue';
import Watchers from '@/components/Watchers.vue';
import Saludar from '@/components/Saludar.vue';
import Card from '@/components/Card.vue';
import { EventBus } from '@/main';
import Ejercicio from '@/components/ejercicio-cv/Ejercicio.vue';
import Filtros from '@/components/Filtros.vue';
import Formularios from '@/components/Formularios.vue';
import Dinamicos from '@/components/Dinamicos.vue';
import CmpRouting from '@/components/Rutas/CmpRouting.vue';

export default {
  components: {
    DataBinding,
    // ComponenteLocal: ComponenteLocal,
    ComponenteLocal,
    Computed,
    Watchers,
    Saludar,
    Ejercicio,
    Card,
    Filtros,
    Formularios,
    Dinamicos,
    CmpRouting,
  },
  data() {
    return {
      msg: 'Un mensaje',
      nombres: ['Angel', 'Sara', 'David'],
      mostrar: true
    }
  },
  methods: {
    mostrarMsg() {
      console.log(this.msg);
    },
    cambiarNombre(event) {
      console.log(event);
      this.nombres.splice(event.pos, 1, event.val);
    }
  },
  created() {
    // console.log('Se ha creado el componente')
    EventBus.$on('cambiaNombre1', this.cambiarNombre);
  }
}
</script>

<style>

</style>
