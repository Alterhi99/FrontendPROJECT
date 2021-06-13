<!--
@Author: Hichem Aitouakli <Hayden>
@Date:   2021-06-09T22:06:53+01:00
@Email:  alterhichem99@gmail.com
@Project: Jobhunt
@Last modified by:   Hayden
@Last modified time: 2021-06-13T16:38:46+01:00
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
                        <router-link v-if="login != true" v-bind:to="{ name: 'Login' }" class="nav-link contact font-weight-bold">Sign Up/Log In</router-link>
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


     <!-- CONTACT -->
     <section class="contact section-padding">
          <div class="container">
               <div class="row">

                    <div class="col-lg-6 mx-auto col-md-7 col-12 py-5 mt-5 text-center" data-aos="fade-up">

                      <h1 class="mb-4">Hey there, Contact <strong>us</strong> for <strong>more</strong> informations</h1>

                      <p>or email us at <a href="mailto:services@Jobhunt.com">services@Jobhunt.com</a></p>
                    </div>

                    <div class="col-lg-8 mx-auto col-md-10 col-12">

                    <!--  -->

                      <form action="#" method="post" class="contact-form" data-aos="fade-up" data-aos-delay="300" role="form">
                        <div class="row">
                          <div class="col-lg-6 col-12">
                            <input type="text" class="form-control border border-primary" name="name" placeholder="Name">
                          </div>

                          <div class="col-lg-6 col-12">
                            <input type="email" class="form-control border border-primary" name="email" placeholder="Email">
                          </div>

                          <div class="col-lg-12 col-12">
                            <textarea class="form-control border border-primary" rows="6" name="message" placeholder="Message"></textarea>
                          </div>

                          <div class="col-lg-5 mx-auto col-7">
                            <button type="submit" class="form-control border border-primary" id="submit-button" name="submit">Send Message</button>
                          </div>
                        </div>

                      </form>
                    </div>

               </div>
          </div>
     </section>


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
 Lorem Ipsum is simply dummy text of the printing and typesetting industry            </p>
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
     import team from './images/Team.png';
     import work from './images/work.png';
     import a from './images/blog/A.png';
     import b from './images/blog/B.png';
     import c from './images/blog/C.png';
     import d from './images/blog/D.png';
     import e from './images/blog/E.png';
     import f from './images/blog/F.png';
     import g from './images/blog/G.png';
     import AOS from 'aos';
     import 'aos/dist/aos.css';

          export default {
            data() {
              return {
                message: 'Hello there, how are you this morning?',
                number: 4,
                logoimg: logo,
                teamimg: team,
                workimg: work,
                imgA: a,
                imgB: b,
                imgC: c,
                imgD: d,
                imgE: e,
                imgF: f,
                imgG: g,
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
