import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Joboffer from '@/components/Joboffer';
import Profile from '@/components/Profile';
import Upgrade from '@/components/Upgrade';
import Login from '@/components/Login';


Vue.use(Router);
/* eslint-disable */
export default new Router({
  routes: [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/Joboffer',
      name: 'Joboffer',
      component: Joboffer,
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/Upgrade',
      name: 'Upgrade',
      component: Upgrade,
    },
  ],
});
