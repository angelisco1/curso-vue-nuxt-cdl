<template>
  <div>
    <h1>Ejercicio CV</h1>
    <Form />
    <CV />
  </div>
</template>

<script>
import CV from './CV.vue';
import Form from './Form.vue';

export default {
  components: {
    Form,
    CV
  }
}
</script>
