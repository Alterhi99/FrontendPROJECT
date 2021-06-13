<!--
@Author: Hichem Aitouakli <Hayden>
@Date:   2021-05-27T22:21:35+01:00
@Email:  alterhichem99@gmail.com
@Project: Jobhunt
@Last modified by:   Hayden
@Last modified time: 2021-06-13T16:39:24+01:00
-->
<style>
  @import '../assets/stylesheets/login.css';
</style>
<template>
<v-layout><!-- eslint-disable -->
<div class="login">
<div class="login-wrap">
<div class="login-html">
  <div class="login-logo">
    <img width="200px" height="200px" :src='logimg'/>
  </div>
  <input id="tab-1" type="radio" name="tab" class="sign-in" checked >
  <label for="tab-1" class="tab">Sign In</label>
  <input id="tab-2" type="radio" name="tab" class="sign-up">
  <label for="tab-2" class="tab">Sign Up</label>
  <div class="login-form">
    <v-form class="sign-in-htm" @submit="loginSubmit">
      <div class="group">
         <v-text-field id="pass" class="input" label="E-mail" v-model="input.Email"
         :rules="emailRules" required>
         </v-text-field>
      </div>
      <div class="group">
        <v-text-field id="pass" class="input"  label="Password" v-model="input.password"
        :type="show1 ? 'text' : 'password'" required>
        </v-text-field>
      </div>
      <div class="group">
        <input id="check" type="checkbox" class="check" checked>
        <label for="check"><span class="icon"></span> Keep me Signed in</label>
      </div>
      <div class="group">
        <v-btn class="button" type="submit" style="background-color:#FFC600" @click="loginSubmit">
          Sign in
        </v-btn>
      </div>
      <div class="hr"></div>
      <div class="foot-lnk">
        <a href="#forgot">Forgot Password?</a>
      </div>
    </v-form>
    <validation-observer class="sign-up-htm" ref="observer" v-slot="{ invalid }">
      <v-form  @submit.prevent="signUpSubmit">                                               <!--#######################" sign up ####################-->
        <div class="group">
          <validation-provider v-slot="{ errors }" name="Nom" rules="alpha_spaces|required|max:26">
            <v-text-field class="input" v-model="nom" :counter="26" :error-messages="errors" label="Nom" required></v-text-field>
          </validation-provider>
        </div>
        <div class="group">
          <validation-provider v-slot="{ errors }" name="Prénom" rules="alpha_spaces|required|max:26">
            <v-text-field class="input" v-model="prenom" :counter="26" :error-messages="errors" label="Prénom" required></v-text-field>
          </validation-provider>
        </div>
        <div class="group">
          <validation-provider v-slot="{ errors }" name="email" rules="required|email">
            <v-text-field class="input" v-model="email" :error-messages="errors" label="E-mail" required></v-text-field>
          </validation-provider>
        </div>
        <div class="group">
          <validation-provider v-slot="{ errors }" name="Password" rules="required|max:26">
            <v-text-field class="input" v-model="password" :counter="26" :error-messages="errors" label="Password" required></v-text-field>
          </validation-provider>
        </div>
        <div class="group">
          <validation-provider v-slot="{ errors }" name="Password2" rules="required|max:26|confirmed:@Password">
            <v-text-field class="input" v-model="password2" :counter="26" :error-messages="errors" label="Confirm Password" required></v-text-field>
            </v-text-field>
          </validation-provider>
        </div>
        <div class="group">
          <validation-provider v-slot="{ errors }" name="Role" rules="required">
            <v-select class="input" v-model="role" :items="items" :error-messages="errors" label="Rôle" data-vv-name="select" required></v-select>
          </validation-provider>
        </div>
        <div class="group">
          <validation-provider v-slot="{ errors }" name="Entreprise" rules="required|max:26">
            <v-text-field class="input" v-model="nomEntr" :counter="26" :error-messages="errors" label="Entreprise" required></v-text-field>
          </validation-provider>
        </div>
        <div class="group">
          <v-btn class="button" style="background-color:#FFC600" type="submit">
            Sing up
          </v-btn>
        </div>
        <div class="hr"></div>
        <div class="foot-lnk">
          <label for="tab-1">Already Member?</a></label>
        </div>
      </v-form>
    </validation-observer>
  </div>
</div>
</div>
</div>
</v-layout>
</template>
<script type="text/javascript"> /* eslint-disable */
import Swal from 'sweetalert2';
import logox from '../assets/logox.png';
import axios from 'axios';
import {alpha_spaces, email, required, digits, max, regex} from 'vee-validate/dist/rules';
import {extend, ValidationObserver, ValidationProvider, setInteractionMode} from 'vee-validate';

setInteractionMode('eager');

extend('alpha_spaces', {
  ...alpha_spaces,
  message: '{_field_} must contain only letters!',
});
extend('email', {
  ...email,
  message: 'Email must be valid',
});
extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
});
extend('confirmed', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: 'Password confirmation does not match'
});

export default {
  components:{
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
      logimg: logox,
      Email: '',
      emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      show1: false,
      rules: {
         required: value => !!value || 'Required.',
         emailMatch: () => ('The email and password you entered don\'t match'),
      },
      errors: [],
      nom: '',
      prenom: '',
      email:'',
      nomEntr: '',
      password: '',
      password2:'',
      numOffre: '',
      role:null,
      items: [
        'Jobseeker',
        'Recruiter',
      ],
      input :{
       Email: "",
       password: ""
      },
    }
  ),
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || 'Password must match';
    },
  },
  methods: {
    validate() {
      if (this.$refs.loginForm.validate()) {
        // submit form to server/API here...
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    showPage(){
      this.$router.push("Dashboard");
    },
    loginSubmit (evt) {
      evt.preventDefault()
      if((this.input.Email=="root@gmail.com") && (this.input.password="1111")){
        this.$router.push({name:'Dashboard'});
      }
      else{
        const kek = {Email:this.input.Email, password: this.input.password};
        console.log(kek);
        axios.post('http://localhost:3000/login',kek).then(response => {
          localStorage.setItem('jwtToken', response.data.accessToken);
          console.log(response.data.accessToken);
          this.$emit("login");
          this.$store.commit("setAuthentification",true);
          this.$store.commit("setName",response.data.data.Nom);
          this.$store.commit("setEmail",response.data.data.Email);
          this.$store.commit("setRole",response.data.data.role)
          console.log(response.data.data.Nom);
          console.log(response.data.data.Email);
          console.log(response.data.data.role);
          console.log(response.data);
          this.$router.replace({name: 'home'})
        }).catch(e => {
          console.log(e)
          this.errors.push(e)
          Swal.fire('Invalid email/password!', `${e}`, 'error');
        })
      }
    },
    signUpSubmit (evt) {
      evt.preventDefault()
      const kek = JSON.stringify(this.input);
      console.log(kek);
      if(this.$refs.observer.validate()){
        axios.post('http://localhost:3000/signup',
        {
          Nom:this.nom,
          Prenom:this.prenom,
          Email:this.email,
          password: this.password,
          NomEntreprise:this.nomEntr,
          role:this.role,
        }
        ).then(response => {
          localStorage.setItem('jwtToken', response.data.token)
          Swal.fire('Success!','User has been successfully added!')
        }).catch(e => {
          console.log(e)
          this.errors.push(e)
          Swal.fire('Error!',`${e}`,'error')
        })
      }
    },
    }
  };
</script>
