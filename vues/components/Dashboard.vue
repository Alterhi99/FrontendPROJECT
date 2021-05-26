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
