<template>
  <div>
    <h2>Form 2/2</h2>
    <input type="text" :value="email" @input="$emit('propCambiada', ['Form2', $event.target.value])">
    <!-- <button type="button" @click="$emit('datoCambiado', email)">Guardar</button> -->
    <!-- <button type="button" @click="guardar">Guardar</button> -->
  </div>
</template>

<script>
export default {
  props: ['email'],
  // data() {
  //   return {
  //     email: ''
  //   }
  // },
  methods: {
    guardar() {
      console.log('Guardamos ' + this.email)
    }
  }
}
</script>
