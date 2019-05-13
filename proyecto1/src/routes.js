import Vue from 'vue';
import VueRouter from 'vue-router';
// import NuevoDato from '@/components/Rutas/NuevoDato.vue'
// import Home from '@/components/Rutas/Home.vue'
// import InfoDato from '@/components/Rutas/InfoDato.vue'
// import EditarDato from '@/components/Rutas/EditarDato.vue'
// import Error from '@/components/Rutas/Error.vue'
import Home from '@/components/EjercicioIcndb/Home.vue'
import Joke from '@/components/EjercicioIcndb/Joke.vue'

Vue.use(VueRouter);

// const rutasHijasDatos = [
//   { path: ':id/informacion', component: InfoDato, props: true, name: 'dato' },
//   { path: ':id/editar', component: EditarDato, props: true, name: 'editar-dato' },
// ]

// export const router = new VueRouter({
//   routes: [
//     { path: '/datos', component: Home, name: 'inicio', children: rutasHijasDatos },
//     { path: '/nuevo-dato', component: NuevoDato, name: 'nuevo' },
//     // { path: '/datos/:id', component: InfoDato, props: true, name: 'dato' },
//     { path: '/', redirect: '/datos' },
//     { path: '*', component: Error },
//   ],
//   mode: 'history'
// });


export const router = new VueRouter({
  routes: [
    { path: '/', component: Home, name: 'inicio' },
    { path: '/joke/:id', component: Joke, name: 'joke' },
  ],
  mode: 'history'
});