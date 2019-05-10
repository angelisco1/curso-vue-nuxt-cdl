<template>
  <div>
    <h1>Componentes dinámicos</h1>
    <button type="button" v-if="currentForm > 1" @click="currentForm--">Anterior</button>
    <button type="button" v-if="currentForm < totalForms" @click="currentForm++">Siguiente</button>
    <button type="button" v-if="currentForm === totalForms" @click="guardar">Guardar</button>
    <!-- <keep-alive> -->
      <!-- <component :is="cmp"></component> -->
    <!-- </keep-alive> -->
    <component :is="cmp" :[getPropKey]="getPropVal" @propCambiada="cambiarProp"></component>

    <h1>Asíncrono</h1>
    <button type="button" @click="cargar = !cargar">Cargar</button>
    <CmpAsincrono v-if="cargar" />
  </div>
</template>

<script>
import Form1 from './Form1.vue';
import Form2 from './Form2.vue';
export default {
  components: {Form1, Form2,
    CmpAsincrono: () => import('./CmpAsincrono.vue')
  },
  data() {
    return {
      cargar: false,
      totalForms: 2,
      currentForm: 1,
      // nombre: '',
      // email: '',
      Form1: {
        key: 'nombre',
        val: 'Angel'
      },
      Form2: {
        key: 'email',
        val: 'angel@gmail.com'
      },
    }
  },
  computed: {
    cmp() {
      return 'Form'+this.currentForm;
    },
    getPropKey() {
      return this[this.cmp].key;
    },
    getPropVal() {
      return this[this.cmp].val;
    }
  },
  methods: {
    guardar() {
      console.log('Datos: ', this.Form1.val, this.Form2.val);
    },
    cambiarProp(event) {
      const [componente, valor] = event;
      this[componente].val = valor;
    }
  }
}
</script>
