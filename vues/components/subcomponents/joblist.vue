<template><!-- eslint-disable max-len -->
    <div><!--
        <div class="row mt-12">
            <div class="col-lg-3">
                <search :query.sync="textSearch" placeholder="Lokasyon Ara"></search>
            </div>
            <div class="col-lg-3">
                 <search :query.sync="jobSearch" placeholder="İş Ara"></search>
            </div>
        </div>
        <hr />
        <div class="row mt-4">
            <div class="col-lg-12">
                 <div class="loading" v-if="loading">
                    Loading....
                    </div>
                <div v-if="Jobs && Jobs.length" class="row">
                    <div class="col-3 mb-3" v-for="item of jobsFilters">
                        <div class="card p-2">
                            <div class="card-body">
                                <h4 class="card-title">{{item.positionName}}</h4>
                                <p class="card-text">{{item.companyName}}</p>
                                <p class="card-text">{{item.cityName}}/{{item.townName}}</p>
                                <router-link :to="{ name: 'jobdetail', params: { id: item.jobId }}" class="btn btn-primary">İncele</router-link>
                            </div>
                        </div>
                    </div>
                     <span v-if="!jobsFilters.length">Sonuç Bulunamadı.</span>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
/*eslint-disable*/
import axios from "axios";
import search from "./search";
export default {
  name: "joblist",
  components: {
    search
  },
  data() {
    return {
      loading: false,
      textSearch: "",
      jobSearch: "",
      Jobs: [],
      errors: []
    };
  },
  computed: {
    jobsFilters: function() {
      return this.Jobs
        .filter(item => {
          return (
            item.cityName &&
            item.cityName
              .toLowerCase()
              .indexOf(this.textSearch.toLowerCase().trim()) != -1
          );
        })
        .filter(item => {
          return (
            item.positionName &&
            item.positionName
              .toLowerCase()
              .indexOf(this.jobSearch.toLowerCase().trim()) != -1
          );
        });
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      axios
        .get(`https://my-json-server.typicode.com/naimina/joblist/Items`)
        .then(response => {
          this.loading = false;
          this.Jobs = response.data;
        })
        .catch(err => {
          this.errors.push(err);
        });
    }
  }
};
</script>
