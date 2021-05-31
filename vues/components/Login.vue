<template>
<v-layout>
<div class="login">
<div class="login-wrap">
<div class="login-html">
  <input id="tab-1" type="radio" name="tab" class="sign-in" checked >
  <label for="tab-1" class="tab">Sign In</label>
  <input id="tab-2" type="radio" name="tab" class="sign-up">
  <label for="tab-2" class="tab">Sign Up</label>
  <v-form class="login-form" @submit="loginSubmit">
    <div class="sign-in-htm">
      <div class="group">
         <v-text-field id="user" label="e-mail" v-model="input.Email"
         :rules="emailRules" required>
         </v-text-field>
      </div>
      <div class="group">
        <v-text-field id="pass" label="password" v-model="input.password"
        :type="show1 ? 'text' : 'password'" required>
        </v-text-field>
      </div>
      <div class="group">
        <input id="check" type="checkbox" class="check" checked>
        <label for="check"><span class="icon"></span> Keep me Signed in</label>
      </div>
      <div class="group">
        <v-btn class="button" type="submit" style="background-color:#FFC600" @click="loginSubmit">
          Sing in
        </v-btn>
      </div>
      <div class="hr"></div>
      <div class="foot-lnk">
        <a href="#forgot">Forgot Password?</a>
      </div>
    </div>
    <div class="sign-up-htm">
      <div class="group">
        <label for="user" class="label">Username</label>
        <input id="user" type="text" class="input">
      </div>
      <div class="group">
        <label for="pass" class="label">Password</label>
        <input id="pass" type="password" class="input" data-type="password">
      </div>
      <div class="group">
        <label for="pass" class="label">Repeat Password</label>
        <input id="pass" type="password" class="input" data-type="password">
      </div>
      <div class="group">
        <label for="pass" class="label">Email Address</label>
        <input id="pass" type="text" class="input">
      </div>
      <div class="group">
        <v-btn class="button" style="background-color:#FFC600" >
          Sing up
        </v-btn>
      </div>
      <div class="hr"></div>
      <div class="foot-lnk">
        <label for="tab-1">Already Member?</a></label>
      </div>
    </div>
  </v-form>
</div>
</div>
<div class="login-logo">
  <img width="300px" height="300px" :src='logimg'/>
</div>
</div>
</v-layout>
</template>
<script type="text/javascript"> /* eslint-disable */
import logox from '../assets/logox.png';
import axios from 'axios';

export default {
  data() {
    return {
      logimg: logox,
      Email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        show1: false,
       password: 'Password',
       rules: {
         required: value => !!value || 'Required.',
         emailMatch: () => ('The email and password you entered don\'t match'),
       },
      input :{
        Email: "",
        password: ""
      },
      errors: [],
    };
  },
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
      const kek = JSON.stringify(this.input);
      console.log(kek);
      axios.post('http://localhost:3000/login',{Email:this.input.Email, password: this.input.password}).then(response => {
        localStorage.setItem('jwtToken', response.data.token)
        this.$router.push({name: 'Dashboard'})
      }).catch(e => {
        console.log(e)
        this.errors.push(e)
        alert("Invalid email/password")
      })
    }
  },

};
</script>
