<template>
  <div>
    <h2>Cmp A</h2>
    <div>
      <label for="valor">Valor:</label>
      <input type="text" @change="$emit('nuevoVal', $event.target.value)">
    </div>
  </div>
</template>
