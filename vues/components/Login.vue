<template>
<v-layout>
<div class="login">
<div class="login-wrap">
<div class="login-html">
  <input id="tab-1" type="radio" name="tab" class="sign-in" checked >
  <label for="tab-1" class="tab">Sign In</label>
  <input id="tab-2" type="radio" name="tab" class="sign-up">
  <label for="tab-2" class="tab">Sign Up</label>
  <div class="login-form">
    <div class="sign-in-htm">
      <div class="group">
        <label for="user" class="label">Username</label>
        <input id="user" type="text" class="input">
      </div>
      <div class="group">
        <label for="pass" class="label">Password</label>
        <input id="pass" type="password" class="input" data-type="password">
      </div>
      <div class="group">
        <input id="check" type="checkbox" class="check" checked>
        <label for="check"><span class="icon"></span> Keep me Signed in</label>
      </div>
      <div class="group">
        <v-btn class="button" style="background-color:#FFC600" @click="showPage">
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
  </div>
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
export default {
  data() {
    return {
      logimg: logox,
      dialog: true,
      tab: 0,
      tabs: [
        { name: 'Login', icon: 'mdi-account' },
        { name: 'Register', icon: 'mdi-account-outline' },
      ],
      valid: true,

      firstName: '',
      lastName: '',
      email: '',
      password: '',
      verify: '',
      loginPassword: '',
      loginEmail: '',
      loginEmailRules: [
        v => !!v || 'Required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      emailRules: [
        v => !!v || 'Required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

      show1: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => (v && v.length >= 8) || 'Min 8 characters',
      },
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
  },

};
</script>
