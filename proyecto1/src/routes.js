import Vue from 'vue';
import VueRouter from 'vue-router';
import NuevoDato from '@/components/Rutas/NuevoDato.vue'
import Home from '@/components/Rutas/Home.vue'
import InfoDato from '@/components/Rutas/InfoDato.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    { path: '/datos', component: Home, name: 'inicio' },
    { path: '/nuevo-dato', component: NuevoDato, name: 'nuevo' },
    { path: '/dato/:id', component: InfoDato, props: true, name: 'dato' },
    { path: '/', redirect: '/datos' }
  ],
  mode: 'history'
});