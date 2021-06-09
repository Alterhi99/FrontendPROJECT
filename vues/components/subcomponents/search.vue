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
