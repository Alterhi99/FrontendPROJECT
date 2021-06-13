<!--
@Author: Hichem Aitouakli <Hayden>
@Date:   2021-06-03T21:14:33+01:00
@Email:  alterhichem99@gmail.com
@Project: Jobhunt
@Last modified by:   Hayden
@Last modified time: 2021-06-13T16:43:48+01:00
-->
<template>
  <div>
  <!--   <input id="input-search" type="text" class="
  form-control" :value="query" @input="updateFilter" :placeholder="placeholder">
    <div class="row mt-12">
            <div class="col-lg-3">
                <input id="input-search" type="text"
                class="form-control" :value="location" @input="updateFilter"
                placeholder='Lokasyon Ara'>
            </div>
            <div class="col-lg-3">
                <input id="input-search2" type="text"
                class="form-control" :value="query" @input="updateFilter" placeholder='İş Ara'>
            </div>
        </div> -->
  </div>
</template>

<script>
/*eslint-disable */
export default {
  name: "search",
  props: ["query","placeholder"],
  data() {
    return {};
  },
  methods: {
    updateFilter: function(e) {
      this.$emit("update:query", e.target.value);
    }
  }
};
</script>
