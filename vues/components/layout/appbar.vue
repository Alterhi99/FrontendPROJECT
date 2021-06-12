<template>
<!-- eslint-disable max-len -->

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
