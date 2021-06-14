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
                        <router-link  v-bind:to="{ name: 'Offers' }" class="nav-link font-weight-bold" active-class="active">Recruiter</router-link>
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
     <h1 class="mb-5 text-center" data-aos="fade-up"> Manage your <strong>offers</strong></h1>
     <template >
        <v-tabs class="mb-5 text-center" align-with-title>
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab class="font-weight-bold">
            View offers
          </v-tab>
          <v-tab-item>
            <joblist Data-aos="fade-up" data-aos-delay="300"></joblist>
          </v-tab-item>
          <v-tab class="font-weight-bold">
            Add offers
          </v-tab>
          <v-tab-item>
            <jobform Data-aos="fade-up" data-aos-delay="300"></jobform>
          </v-tab-item>
        </v-tabs>
     </template>
   </div>

<!--footer-->

    <footer class="site-footer">
      <div class="container">
        <div class="row">

          <div class="col-lg-5 mx-lg-auto col-md-8 col-10">
             <h1 class="text-white" data-aos="fade-up" data-aos-delay="100">We offer you best  <strong>services</strong> only.</h1>
          </div>

          <div class="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="200">
            <h4 class="my-4">Contact Info</h4>

            <p class="mb-1">
              <i class="fa fa-phone mr-2 footer-icon"></i>
              +213 050 070 4224
            </p>

            <p>
              <a href="#">
                <i class="fa fa-envelope mr-2 footer-icon"></i>
                services@Jobhunt.com
              </a>
            </p>
          </div>

          <div class="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="300">
            <h4 class="my-4">Our Services</h4>

            <p class="mb-1">
              <i class="fa fa-home mr-2 footer-icon"></i>
Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>

          <div class="col-lg-4 mx-lg-auto text-center col-md-8 col-12" data-aos="fade-up" data-aos-delay="400">
            <p class="copyright-text">Copyright &copy; 2021 Job hunt</p>
            <br>

          </div>

          <div class="col-lg-4 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay="500">

            <ul class="footer-link">
              <li><a href="#">Stories</a></li>
              <li><a href="#">Work with us</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay="600">
            <ul class="social-icon">
              <li><a href="#" class="fa fa-instagram"></a></li>
              <li><a href="#" class="fa fa-twitter"></a></li>
              <li><a href="#" class="fa fa-facebook"></a></li>
              <li><a href="#" class="fa fa-envelope-o"></a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  </v-container>
</template>

     <!-- SCRIPTS -->

<script> /* eslint-disable */
import logo from './images/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import joblist from '../subcomponents/joblist';
import jobform from '../subcomponents/jobform';

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

         };
       },
       components:{
         joblist,
         jobform,
       },
       methods: {
         reply()  {
           this.message = "I'm doing great. Thank You!";
         },
         Logout(){
           this.$store.commit("setAuthentification",false);
           this.$store.commit("setName",'');
           this.$store.commit("setEmail",'');
           this.$router.go();
         },
       },
       created(){
         AOS.init();
         this.login = this.$store.getters.getAuth;
         this.user.email = this.$store.getters.getEmail;
         this.user.fullName = this.$store.getters.getName;
         console.log(this.$store.getters.getAuth);
         console.log(this.$store.getters.getEmail);
         console.log(this.$store.getters.getName);
         this.user.initials = this.user.fullName.charAt(0).toUpperCase();
         console.log(this.user.initials);
         console.log(this.user.fullName);
         console.log(this.user.email);
       },
     };
  </script>
