// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Calendar from './components/subcomponents/calendar';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';

import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';
import router from './router';
import store from './store/store';

Vue.use(BootstrapVue);
Vue.use(Vuetify);

Vue.config.productionTip = false;

/* eslint-disable */
new Vue({
  vuetify: new Vuetify({
    theme: {
      disable: true
    }
  }),
  el: '#app',
  router,
  components: {
    App
  },
  store: store,
  template: '<App/>',
});
/*new Vue({
  vuetify: new Vuetify({
    theme: {
      disable: true
    }
  }),
  el: '#login',
  components: {
    Login
  },
  template: '<Login/>',
});


new Vue({
  el: '#cal',
  components: {
    Calendar
  },
  template: '#calendar',
  computed: {
    currentComp: function() {
      return "Calendar";
    }
  }
});*/
