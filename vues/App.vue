<!--
@Author: Hichem Aitouakli <Hayden>
@Date:   2021-05-13T19:43:13+01:00
@Email:  alterhichem99@gmail.com
@Project: Jobhunt
@Last modified by:   Hayden
@Last modified time: 2021-06-13T16:36:49+01:00
-->
<template>
<!-- eslint-disable max-len -->
<v-app id="inspire">
  <div v-if="!admin" fluid >
    <router-view />
  </div>
  <v-main v-else>
    <v-container fluid>
      <div id="app">
        <router-view />
      </div>
    </v-container>
  </v-main>
  <v-footer v-if="admin" color="#FFC600" app :hidden="!login">
    <span style="color:#1A1A1A;font-weight:bold">&copy;Job Hunt™ 2021</span>
  </v-footer>
</v-app>
</template>

<script>
import './assets/stylesheets/main.css';
import foot1 from './assets/logonav.png';
import calcomp from './components/subcomponents/calendar';

// eslint-disable-next-line
export default { //import { mdiCogs } from '@mdi/js';
  data: () => ({
    admin: false,
    barImage: 'https://i.pinimg.com/564x/e8/29/fd/e829fd11f548737c67fa74f4b064fdd8.jpg',
    drawer: null,
    logo: foot1,
    login: false,
    titleIcon: 'home',
    props: { // eslint-disable-next-line
      source: String,
    },
    items: [{ // eslint-disable-next-line
      title: 'Profile'
    }, { // eslint-disable-next-line
      title: 'Settings'
    }],
  }),
  components: { // eslint-disable-next-line
    calcomp,
  }, /*eslint-disable*/
  mounted:{

  },
  methods: {
    /* eslint-disable */
    changeIcon(i) {
      if (i == 'Dashboard') {
        this.titleIcon = 'home';
      } else {
        if (i == 'Joboffer') {
          this.titleIcon = 'mdi-briefcase';
        } else {
          if (i == 'Upgrade') {
            this.titleIcon = 'mdi-cogs';
          } else {
            this.titleIcon = 'mdi-account';
          }
        }
      }
    }, //changeIcon stops here
    Logout(){
      this.$router.push("/");
    },
    show(){ // cette fonction va afficher appbar footer et drawer si la page n'est pas login
      if(this.$route.name !="Login"){
        this.login = true;
      }
    }
    //showEverything(){
    //  this.login=true;
    //  localStorage.setItem(this.login, true)
    //}

  },
  beforeMount(){
    this.show();
    this.changeIcon(this.$route.name);
  },
  watch:{
    '$route': 'show',
  },
};
</script>
