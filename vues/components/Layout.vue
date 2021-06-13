<!--
@Author: Hichem Aitouakli <Hayden>
@Date:   2021-06-09T23:16:37+01:00
@Email:  alterhichem99@gmail.com
@Project: Jobhunt
@Last modified by:   Hayden
@Last modified time: 2021-06-13T16:40:22+01:00
-->
<template>
<!-- eslint-disable max-len -->
<v-app id="inspire">
  <v-navigation-drawer color="#1A1A1A" fixed v-model="drawer" permanent :mini-variant.sync="drawer" app :src='barImage' :hidden="!login">
    <v-btn absolute right fab @click="drawer = !drawer" :style="{color:white,top: '50%', transform:'translate(75%, -50%)'}">
      <v-icon v-if="drawer">mdi-chevron-right</v-icon>
      <v-icon v-else>mdi-chevron-left</v-icon>
    </v-btn>
    <v-list dense>
      <!-- vnav images-->
      <v-flex align-self-center="true" class="center">
        <v-img :src="logo" max-height="120" max-width="120" class="center"></v-img>
      </v-flex>
      <v-divider style="color:white;box-shadow: 1px 1px;"></v-divider>
      <router-link v-bind:to="{ name: 'Dashboard' }" class="side_bar_link" active-class="active">
        <v-list-item>
          <v-list-item-action>
            <v-icon style="color:white">home</v-icon>
          </v-list-item-action>
          <v-list-item-content style="color:white" @click="changeIcon('Dashboard')">
            Dashboard
          </v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link v-bind:to="{ name: 'Joboffer' }" class="side_bar_link" active-class="active">
        <v-list-item>
          <v-list-item-action>
            <v-icon style="color:white">mdi-briefcase</v-icon>
          </v-list-item-action>
          <v-hover v-slot="{ hover }">
            <v-list-item-content style="color:white" @click="changeIcon('Joboffer')">
              Job offer
            </v-list-item-content>
          </v-hover>
        </v-list-item>
      </router-link>
      <router-link v-bind:to="{ name: 'Upgrade' }" class="side_bar_link" active-class="active">
        <v-list-item>
          <v-list-item-action>
            <v-icon style="color:white">mdi-cogs</v-icon>
          </v-list-item-action>
          <v-list-item-content style="color:white" @click="changeIcon('Upgrade')">
            Upgrade
          </v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link v-bind:to="{ name: 'Profile' }" class="side_bar_link" active-class="active">
        <v-list-item>
          <v-list-item-action>
            <v-icon id="imp" style="color:white">mdi-account-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content id="imp" style="color:white" @click="changeIcon('Profile')">
            Profile
          </v-list-item-content>
        </v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar fixed app class="topbar" :src="barImage" :hidden="!login">
    <v-icon style="color:#1A1A1A">{{titleIcon}}</v-icon>&nbsp;&nbsp;
    <v-toolbar-title style="color:#1A1A1A" v-text="this.$route.name"></v-toolbar-title>
    <v-spacer></v-spacer>
    <div>
      <v-menu bottom offset-y offset-x>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon style="color:#1A1A1A">mdi-calendar</v-icon>
          </v-btn>
        </template>
        <calcomp />
      </v-menu>
    </div>
    <div class="text-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn outlined style="color:#1A1A1A;"  v-bind="attrs" v-on="on">
            Admin
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>

          </v-list-item>
          <v-list-item>
             <v-list-item-content>
              <v-list-item-action @click="Logout">Sign out</v-list-item-action>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
  <v-main>
    <v-container fluid>
      <div id="app">
        <router-view @login="showEverything" />
      </div>
    </v-container>
  </v-main>
  <v-footer color="#FFC600" app :hidden="!login">
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
