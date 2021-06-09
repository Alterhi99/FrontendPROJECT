<template><!--/* eslint-disable */--> <!-- eslint-disable max-len -->
<v-layout row wrap>
  <div>
      <h1>{{ title }}</h1>
   <joblist />
  </div>
</v-layout>
</template>
<script type="text/javascript">
import joblist from '@/components/subcomponents/joblist';

/* eslint-disable */
export default {
  data() {
    return {
      title: ""
    };
  },
  components: {
    joblist
  }
};
</script>

<style>
ul.item li {
  float: left;
  width: 20%;
  height: 200px;
  border: solid 2px #ddd;
  padding: 20px;
  margin: 20px;
  list-style: none;
}
</style>
