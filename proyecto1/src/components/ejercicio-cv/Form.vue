<template>
  <div>
    <h2>Form</h2>
    <div>
      <label for="nombre">Nombre:</label>
      <input type="text" v-model="inputNombre">
    </div>
    <div>
      <label for="apellidos">Apellidos:</label>
      <input type="text" v-model="inputApellidos">
    </div>
    <!--
    <div>
      <label for="email">Email:</label>
      <input type="email">
    </div>
     -->
    <div>
      <label for="skills">Skills:</label>
      <input type="text" @change="addSkill($event.target.value)"> |
      <input type="text" v-for="(skill, pos) of skills" :key="pos" :value="skill" @change="actualizarSkill($event.target.value, pos)">
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/main';

export default {
  data() {
    return {
      nombre: '',
      apellidos: '',
      skills: []
    }
  },
  computed: {
    inputNombre: {
      get() {
        return this.nombre;
      },
      set(nuevoNombre) {
        this.nombre = nuevoNombre;
        EventBus.actualizarCV(['nombre', nuevoNombre]);
      }
    },
    inputApellidos: {
      get() {
        return this.apellidos;
      },
      set(nuevosApellidos) {
        this.apellidos = nuevosApellidos;
        EventBus.actualizarCV(['apellidos', nuevosApellidos]);
      }
    }
  },
  methods: {
    addSkill(nuevaSkill) {
      this.skills.push(nuevaSkill);
    },
    actualizarSkill(nuevoVal, pos) {
      this.skills.splice(pos, 1, nuevoVal);
    }
  },
  created() {
    EventBus.$on('inicializar', (datos) => {
      this.nombre = datos.nombre;
      this.apellidos = datos.apellidos;
      // Con este habría que emitir evento
      // this.skills = [].concat(datos.skills);
      // Con este no porque es un valor por referencia
      this.skills = datos.skills;
    })
  }
}
</script>
