<template>
  <div>
    <h1>Cliente ICNDB</h1>
    <hr>
    <nav>
      <ul>
        <li><router-link :to="{name: 'inicio'}">Inicio</router-link></li>
        <!-- <li><router-link :to="{name: 'joke'}">Inicio</router-link></li> -->
      </ul>
    </nav>
    <hr>
    <router-view></router-view>
  </div>
</template>
