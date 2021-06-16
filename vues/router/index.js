/**
 * @Author: Hichem Aitouakli <Hayden>
 * @Date:   2021-05-13T19:43:13+01:00
 * @Email:  alterhichem99@gmail.com
 * @Project: Jobhunt
 * @Last modified by:   Hayden
 * @Last modified time: 2021-06-13T16:37:28+01:00
 */
import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Joboffer from '@/components/Joboffer';
import Profile from '@/components/Profile';
import Upgrade from '@/components/Upgrade';
import Login from '@/components/Login';
import Home from '@/components/pages/home';
import Contact from '@/components/pages/contact';
import Offers from '@/components/pages/offer';
import store from '@/store/store';

Vue.use(Router);
/* eslint-disable */
export default new Router({
  routes: [
    {
      path:"/",
      redirect:{
        name:"home",
      }
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
    {
        path: '/Offers',
        name: 'Offers',
        component: Offers,
        beforeEnter:(to, from, next) =>{
          if((store.state.auth == true)&& (store.state.role="Jobseeker")){
            next();
          }else{
            next("/home");
          }
        }
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        beforeEnter:(to, from, next) =>{
          if(store.state.auth == true){
            next("/home");
          }else{
            next();
          }
        }
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter:(to, from, next) =>{
        if((store.state.auth == false)&& (store.state.role="admin")){
          next("/login");
        }else{
          next();
        }
      }
    },
    {
      path: '/Joboffer',
      name: 'Joboffer',
      component: Joboffer,
      beforeEnter:(to, from, next) =>{
        if((store.state.auth == false)&& (store.state.role="admin")){
          next("/login");
        }else{
          next();
        }
      }
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile,
      beforeEnter:(to, from, next) =>{
        if((store.state.auth == false)&& (store.state.role="admin")){
          next("/login");
        }else{
          next();
        }
      }
    },
    {
      path: '/Upgrade',
      name: 'Upgrade',
      component: Upgrade,
      beforeEnter:(to, from, next) =>{
        if((store.state.auth == false)&& (store.state.role="admin")){
          next("/login");
        }else{
          next();
        }
      }
    },
  ],
});
