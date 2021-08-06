import Vue from 'vue';
import PortalVue from 'portal-vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(PortalVue);
Vue.use(VueMaterial);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
