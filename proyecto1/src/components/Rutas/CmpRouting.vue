<template>
  <div>
    <nav>
      <ul>
        <li><router-link :to="{name: 'inicio'}">Home</router-link></li>
        <li><router-link :to="{name: 'nuevo'}">Nuevo dato</router-link></li>
        <li><router-link :to="{ name: 'dato', params: {id: 1} }">Dato 1</router-link></li>
        <li><router-link :to="{ name: 'dato', params: {id: 2} }">Dato 2</router-link></li>
      </ul>
    </nav>
    <hr>
    <router-view></router-view>
  </div>
</template>
