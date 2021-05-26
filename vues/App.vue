<template>
<!-- eslint-disable max-len -->
<v-app id="inspire">
  <v-navigation-drawer color="#1A1A1A" fixed v-model="drawer" permanent :mini-variant.sync="drawer" app>
    <v-btn absolute right fab @click="drawer = !drawer" :style="{color:white,top: '50%', transform:'translate(75%, -50%)'}">
      <v-icon v-if="drawer">mdi-chevron-right</v-icon>
      <v-icon v-else>mdi-chevron-left</v-icon>
    </v-btn>
    <v-list dense>
      <!-- vnav images-->
      <v-flex align-self-center="true" class="center">
        <v-img :src="logo" max-height="150" max-width="150" class="center"></v-img>
      </v-flex>
      <v-divider></v-divider>
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
  <v-app-bar fixed app class="topbar">
    <v-icon style="color:#1A1A1A">{{titleIcon}}</v-icon>&nbsp;&nbsp;
    <v-toolbar-title style="color:#1A1A1A" v-text="this.$route.name"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field rounded hide-details prepend-icon="mdi-magnify" single-line label="Search" outlined></v-text-field>
    <v-spacer></v-spacer>
    <div>
      <v-menu offset-y>
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
          <v-btn outlined style="color:#1A1A1A;" icon v-bind="attrs" v-on="on">
            <v-avatar size="30">
              <v-icon style="color:#1A1A1A;">mdi-account</v-icon>
            </v-avatar>

          </v-btn>
          Admin
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
  <v-main>
    <v-container fluid>
      <div id="app">
        <router-view />
      </div>
    </v-container>
  </v-main>
  <v-footer color="#FFC600" app>
    <span style="color:#1A1A1A">&copy;Job Hunt 2021</span>
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
    drawer: null,
    logo: foot1,
    titleIcon: 'home',
    props: { // eslint-disable-next-line
      source: String,
    },
    items: [{ // eslint-disable-next-line
      title: 'Profile'
    }, { // eslint-disable-next-line
      title: 'Settings'
    }, { // eslint-disable-next-line
      title: 'Sign out'
    }],
  }),
  components: { // eslint-disable-next-line
    calcomp,
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
  },
};
</script>
