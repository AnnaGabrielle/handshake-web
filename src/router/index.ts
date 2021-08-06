import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import Forms from '../views/Forms.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/cadastro',
    name: 'Forms',
    component: Forms,
  },
  {
    path: '/inicio',
    name: 'Home',
    component: Home,
  },
  {
    path: '/perfil/:id',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/cadastro',
    name: 'Forms',
    component: Forms,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
