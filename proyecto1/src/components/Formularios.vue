<template>
  <div>
    <h1>Formularios</h1>
    <form @submit.prevent="guardar">
      <div>
        <label>Nombre:</label>
        <input type="text" :class="{error: errors.has('nombre')}" name="nombre" v-validate.continues="'required|min:3|alpha|esStark'" v-model="nombre">
        <p v-for="error in errors.collect('nombre')">{{error}}</p>
      </div>
      <div>
        <label>Apellidos:</label>
        <input type="text" name="apellidos" v-model="apellidos">
      </div>
      <div>
        <h2>Modificadores</h2>
        <p>{{nombre}}!</p>
        <p>{{apellidos}}!</p>
        <p>{{typeof(precio)}}</p>
        <input type="text" v-model.trim="nombre">
        <input type="number" v-model.number="precio">
        <input type="text" v-model.trim.lazy="apellidos">

        <input type="text" @keyup.space.enter="mostrarTecla($event.keyCode)">
      </div>

      <div class="div-stop" @click="mostrarMsg('div')">
        <button @click.stop="mostrarMsg('btn', $event)">Click aquí</button>
      </div>

      <button type="submit">Guardar</button>
      <!--
      <div>
        <p>Genero: {{genero}}</p>
        <input type="radio" value="h" v-model="genero">Hombre
        <input type="radio" value="m" v-model="genero">Mujer
      </div>
      <div>
        <p>Skills: {{skills}}</p>
        <input type="checkbox" value="js" v-model="skills">JS
        <input type="checkbox" value="ruby" v-model="skills">Ruby
        <input type="checkbox" value="python" v-model="skills">Python
        <input type="checkbox" value="java" v-model="skills">Java
        <input type="checkbox" value="c" v-model="skills">C
      </div>
      <div>
        <p>Idioma: {{idioma}}</p>
        <select v-model="idioma">
          <option value="en">En</option>
          <option value="es">Es</option>
          <option value="it">It</option>
        </select>
        <p>Idiomas: {{idiomas}}</p>
        <select v-model="idiomas" multiple>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="it">Italian</option>
        </select>
      </div> -->
      <!-- <p>marcado: {{marcado}}</p> -->
      <!-- <MiInput :check="marcado" /> -->
      <!-- <MiInput v-model="apellidos" /> -->
    </form>
  </div>
</template>

<script>
import MiInput from './MiInput.vue';

export default {
  components: {
    MiInput
  },
  data() {
    return {
      nombre: 'Angel',
      apellidos: 'Villalba',
      genero: 'm',
      skills: ['js', 'python'],
      idioma: 'en',
      idiomas: ['es'],
      marcado: true,
      precio: 3
    }
  },
  methods: {
    guardar(event) {
      // event.preventDefault();
      this.$validator.validateAll().then(resp => {
        console.log('Validaciones correctas?', resp)
        if (resp) {
          console.log('Guardando...');
        }
      });
    },
    mostrarTecla(tecla) {
      console.log('Pulsada: ' + tecla)
    },
    mostrarMsg(msg, event) {
      // event.stopPropagation();
      console.log(msg)
    }
  }
}
</script>

<style scoped>
  input.error {
    border: 1px solid red;
  }

  div.div-stop {
    border: 1px solid greenyellow;

  }
</style>
