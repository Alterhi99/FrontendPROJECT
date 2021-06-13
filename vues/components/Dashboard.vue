<!--
@Author: Hichem Aitouakli <Hayden>
@Date:   2021-05-13T19:43:13+01:00
@Email:  alterhichem99@gmail.com
@Project: Jobhunt
@Last modified by:   Hayden
@Last modified time: 2021-06-13T16:43:26+01:00
-->
<template>
<v-layout>
  <v-layout row wrap>
    <v-flex xs12>
      <div v-text="message"></div>
    </v-flex>
    <v-flex xs12>
      <v-btn v-on:click="reply">Reply</v-btn>
    </v-flex>
  </v-layout>
</v-layout>
</template>
<script type="text/javascript">


export default {/* eslint-disable */
  data() {
    return {
      title: 'Dashboard',
      message: 'Hello there, how are you this morning?',
      number: 1,
    };
  },
  methods: {
    reply()  {
      this.message = "I'm doing great. Thank You!";
    },
  },
};
</script>
