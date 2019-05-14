import Vue from 'vue';
import VueRouter from 'vue-router';
import ListaTareas from '@/components/ListaTareas.vue'
import FormTarea from '@/components/FormTarea.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    { path: '/', component: ListaTareas, name: 'index' },
    { path: '/nuevo-tarea', component: FormTarea, name: 'nueva' },
    { path: '/editar-tarea/:id', component: FormTarea, name: 'editar' },
  ],
  mode: 'history'
})