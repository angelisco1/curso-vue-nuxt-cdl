<template>
  <div>
    <h1>Home</h1>
    <hr>
    <ul>
      <li>Dato 1
        <router-link :to="{name: 'dato', params: {id: 1}}">Info</router-link> |
        <router-link :to="{name: 'editar-dato', params: {id: 1}}">Editar</router-link>
      </li>
      <li>Dato 2
        <!-- <a href="/datos/2/editar">Editar</a> -->
        <router-link :to="{name: 'dato', params: {id: 2}}">Info</router-link> |
        <router-link :to="{name: 'editar-dato', params: {id: 2}}">Editar</router-link>
        <router-link :to="{name: 'editar-dato', params: {id: 2}, query: {datosGuardados: true}}">Editar (datosGuardados)</router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>
