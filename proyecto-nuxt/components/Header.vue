<template>
  <header>
    <nav>
      <ul>
        <li><nuxt-link to="/">Inicio</nuxt-link></li>
        <li><nuxt-link :to="{name: 'nuevo-usuario'}">Nuevo Usuario</nuxt-link></li>
        <li><nuxt-link to="/usuarios">Usuarios</nuxt-link></li>
        <li><nuxt-link :to="{name: 'usuarios-id', params: {id: 2}}">Usuario 2</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>
