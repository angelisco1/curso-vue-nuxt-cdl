<template>
  <div>
    <h2>{{titulo}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      required: true
    }
  }
}
</script>
