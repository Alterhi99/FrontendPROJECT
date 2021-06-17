<!--
@Author: Hichem Aitouakli <Hayden>
@Date:   2021-06-12T13:13:49+01:00
@Email:  alterhichem99@gmail.com
@Project: Jobhunt
@Last modified by:   Hayden
@Last modified time: 2021-06-13T19:34:38+01:00
-->
<!-- eslint-disable -->
<style scoped>
@import './css/index.css';
@import './css/templatemo-digital-trend.css';
@import './css/font-awesome.min.css';
@import './css/owl.theme.default.min.css';
.root{
  max-width: 100%;
}
</style>
<template>
  <v-container class="root pa-0 ma-0">
    <!-- MENU BAR -->
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <router-link v-bind:to="{ name: 'home' }" class="navbar-brand" href="home">
              <img :src="logoimg" class="img-fluid" alt="logo" width="120px">
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link v-bind:to="{ name: 'home' }" class="nav-link smoothScroll font-weight-bold" active-class="active">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link  v-bind:to="{ name: 'Login' }" class="nav-link smoothScroll font-weight-bold" active-class="active">Jobseeker</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link v-if="role=='Recruiter'"  v-bind:to="{ name: 'Offers' }" class="nav-link font-weight-bold" active-class="active">Recruiter</router-link>
                      <router-link v-else-if="role=='Jobseeker'" v-bind:to="{ name: 'Offerlist' }" class="nav-link font-weight-bold" active-class="active">Offers</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link  v-bind:to="{ name: 'Contact' }" class="nav-link font-weight-bold" active-class="active">Contact</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link v-if="!login" v-bind:to="{ name: 'Login' }" class="nav-link contact font-weight-bold" active-class="active">Sign Up/Log In</router-link>
                        <div v-else class="pl-10 text-center">
                          <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn icon outlined style="color:white;"  v-bind="attrs" v-on="on">
                                <v-avatar>
                                <span class="white--text text-h5">  {{ user.initials }}</span>
                              </v-avatar>
                              </v-btn>
                            </template>
                            <v-list>
                              <v-list-item link v-for="(item, index) in items" :key="index">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                              </v-list-item>
                              <v-list-item link>
                                 <v-list-item-content>
                                  <v-list-item-action @click="Logout">Sign out</v-list-item-action>
                                </v-list-item-content>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


     <!-- OFFERS -->
   <div class="justify-content-center">
     <h1 class="mb-5 text-center" data-aos="fade-up"> Browse <strong>offers</strong></h1>
     <offerlist @back="refreshPage" Data-aos="fade-up" data-aos-delay="300"></offerlist>
   </div>

   <!-- FOOTER -->
   <footer class="site-footer">
     <ufooter/>
   </footer>
  </v-container>
</template>

     <!-- SCRIPTS -->

<script> /* eslint-disable */
import logo from './images/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import offerlist from '../subcomponents/offerlist';
import ufooter from '../layout/ufooter';

     export default {
       data() {
         return {
           number: 4,
           logoimg: logo,
           tab: null,
           login: false,
           user: {
            fullName: '',
            initials: '' ,
            email: '',
           },
           items: [{ // eslint-disable-next-line
             title: 'Profile'
           }, { // eslint-disable-next-line
             title: 'Settings'
           }],
           role: '',
         };

       },
       components:{
         offerlist,
         ufooter,
       },
       methods: {
         reply()  {
           this.message = "I'm doing great. Thank You!";
         },
         Logout(){
           this.$store.commit("setAuthentification",false);
           this.$store.commit("setName",'');
           this.$store.commit("setEmail",'');
           this.$store.commit("setRole",'');
           this.$store.commit("setToken",'');
           this.$router.go();
         },
         refreshPage(){
           console.log("refreshing...");
           this.$forceUpdate();
         },
       },
       created(){           // when the vue is created
         AOS.init();
         this.login = this.$store.getters.getAuth;
         this.user.email = this.$store.getters.getEmail;
         this.user.fullName = this.$store.getters.getName;
         this.role = this.$store.getters.getRole;
         this.user.initials = this.user.fullName.charAt(0).toUpperCase();
         console.log(this.$store.getters.getAuth);
         console.log(this.$store.getters.getEmail);
         console.log(this.$store.getters.getName);
         console.log(this.user.initials);
         console.log(this.user.fullName);
         console.log(this.user.email);
       },
       beforeMount(){
         this.role = his.$store.getters.getRole;
       },
     };
  </script>
