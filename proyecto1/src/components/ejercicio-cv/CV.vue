<template>
  <div>
    <h2>CV de {{nombreCompleto}}</h2>
    <p>Email: {{email}}</p>
    <p>Trabajo actual: {{infoTrabajo}}</p>
    <fieldset>
      <legend>Skills</legend>
      <ul>
        <li v-for="(skill, pos) in skills" :key="pos">{{skill}}</li>
      </ul>
    </fieldset>
    <fieldset>
      <legend>Idiomas</legend>
      <ul>
        <li v-for="(idioma, pos) in idiomas" :key="pos">{{idioma}}</li>
      </ul>
    </fieldset>
  </div>
</template>

<script>
import { EventBus } from '@/main';

export default {
  data() {
    return {
      nombre: 'Angel',
      apellidos: 'Villalba Fdez-Paniagua',
      email: 'angel@gmail.com',
      trabajo: {
        empresa: 'Boream',
        puesto: 'Formador IT'
      },
      skills: ['JS', 'Ruby', 'Angular', 'Vue'],
      idiomas: ['Español+++', 'Ingles+']
    }
  },
  methods: {
    // cambiarNombre(n) {
    //   this.nombre = n;
    // }
  },
  computed: {
    nombreCompleto() {
      return `${this.nombre} ${this.apellidos}`;
    },
    infoTrabajo() {
      return `${this.trabajo.puesto} en ${this.trabajo.empresa}`;
    }
  },
  created() {
    EventBus.$on('actualizarCv', (datos) => {
      const [key, val] = datos;
      this[key] = val;
    });
    EventBus.inicializarDatosForm(this.$data);
  },
  beforeDestroy() {

  }
}
</script>
