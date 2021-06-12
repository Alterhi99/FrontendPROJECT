<template>
<!-- eslint-disable max-len -->
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

    show(){ // cette fonction va afficher appbar footer et drawer si la page n'est pas login
      if(this.$route.name !="Login"){
        this.login = true;
      }
    }


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
