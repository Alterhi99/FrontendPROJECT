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
                        <router-link v-bind:to="{ name: 'home' }" class="nav-link smoothScroll" active-class="active">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link  v-bind:to="{ name: 'Login' }" class="nav-link smoothScroll" active-class="active">Jobseeker</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link  v-bind:to="{ name: 'Login' }" class="nav-link" active-class="active">Recuiter</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link  v-bind:to="{ name: 'Contact' }" class="nav-link" active-class="active">Contact</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link v-bind:to="{ name: 'Login' }" class="nav-link contact" active-class="active">Sign Up/Log In</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


     <!-- HERO -->
     <section class="hero hero-bg d-flex justify-content-center align-items-center">
               <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
                              <div class="hero-text">

                                   <h1 class="text-white" data-aos="fade-up">Sieze your opportunity</h1>

                                   <a href="contact.html" class="custom-btn btn-bg btn mt-3" data-aos="fade-up" data-aos-delay="100">Let us discuss together!</a>

                              </div>
                        </div>

                        <div class="col-lg-6 col-12">
                          <div class="hero-image" data-aos="fade-up" data-aos-delay="300">

                            <img :src="teamimg" class="img-fluid" alt="working Team" >
                          </div>
                        </div>

                    </div>
               </div>
     </section>


     <!-- ABOUT -->
     <section class="about section-padding pb-0" id="about">
          <div class="container">
               <div class="row">

                    <div class="col-lg-7 mx-auto col-md-10 col-12">
                         <div class="about-info">

                              <h2 class="mb-4" data-aos="fade-up">Welcome to Job Hunt <strong>Recuitement agency for all services </strong> in Algeria</h2>

                              <p class="mb-0" data-aos="fade-up">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged .
                              <br><br>Lorem Ipsum is <strong>simply</strong> to use Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                         </div>

                         <div class="about-image" data-aos="fade-up" data-aos-delay="200">

                          <img :src="workimg" class="img-fluid" alt="office">
                        </div>
                    </div>

               </div>
          </div>
     </section>
     <!-- SLIDER -->
     <section class="project companies section-padding" id="project">
          <div class="container-fluid">
               <div class="row">
                    <div class="col-lg-12 col-12">
                        <h2 class="mb-5 text-center" data-aos="fade-up">
                          Our Featured
                            <strong>Companies</strong>
                        </h2>
                        <div class="gallery">
                          <a target="_blank" href="images/blog/A.PNG">
                            <img :src="imgA" alt="Forest" width="600" height="500">
                          </a>
                        </div>
                        <div class="gallery">
                          <a target="_blank" href="images/blog/B.PNG">
                            <img :src="imgB" alt="Northern Lights" width="600" height="500">
                          </a>
                        </div>
                        <div class="gallery">
                          <a target="_blank" href="images/blog/C.PNG">
                            <img :src="imgC" alt="Mountains" width="600" height="500">
                          </a>
                        </div>
                        <div class="gallery">
                          <a target="_blank" href="images/blog/D.PNG">
                            <img :src="imgD" alt="Mountains" width="600" height="500">
                          </a>
                        </div>
                        <div class="gallery">
                          <a target="_blank" href="images/blog/D.PNG">
                            <img :src="imgE" alt="Mountains" width="600" height="500">
                          </a>
                        </div>
                        <div class="gallery">
                          <a target="_blank" href="images/blog/F.PNG">
                            <img :src="imgF" alt="Mountains" width="600" height="500">
                          </a>
                        </div>

                    </div>

               </div>
          </div>

     </section>

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
         };
       },
       methods: {
         reply()  {
           this.message = "I'm doing great. Thank You!";
         },
       },
       created(){
         AOS.init();
       },
     };
  </script>
