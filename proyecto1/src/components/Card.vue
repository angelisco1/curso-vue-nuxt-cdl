<template>
  <div>
    <!-- <h3>Título</h3>
    <img :src="require('@/assets/logo.png')" width="100px" alt=""> -->
    <slot name="header"></slot>
    <slot name="content"><img :src="require('@/assets/logo.png')" width="100px" alt=""></slot>
    <p>Una descripción</p>
  </div>
</template>