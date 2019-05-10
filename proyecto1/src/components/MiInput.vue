<template>
  <input type="text" @change="$emit('input', $event.target.value)" >
  <!-- <input type="checkbox" :value="check" @mouseover="$emit('change', !$event.target.value)" > -->
</template>

<script>
export default {
  props: ['check']
}
</script>
