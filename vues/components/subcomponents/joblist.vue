<template>
  <v-container fluid >
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar
          class="mb-1 border border-primary"
        >
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="keys"
              prepend-inner-icon="mdi-arrow-up"
              label="Sort by"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle
              v-model="sortDesc"
              mandatory
            >
              <v-btn
                large
                depressed
                color="#FFC600"
                :value="false"
              >
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn
                large
                depressed
                color="#FFC600"
                :value="true"
              >
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.IntituleOffre"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card class="border border-primary">
              <v-card-title class="subheading font-weight-bold">
                {{ item.IntituleOffre }}
              </v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item
                  v-for="(key, index) in filteredKeys"
                  :key="index"
                >
                  <v-list-item-content :class="{ 'blue--text': sortBy === key }">
                    {{ key }}:
                  </v-list-item-content>
                  <v-list-item-content
                    class="align-end"
                    :class="{ 'blue--text': sortBy === key }"
                  >
                    {{ item[key] }}
                  </v-list-item-content>

                </v-list-item>
                <div class="d-flex justify-content-center">
                       <v-btn
                       color="#FFC600"
                       :value="true"
                       >Edit</v-btn>
                       <v-btn
                       color="#1A1A1A"
                       style="color:white;"
                       :value="true"
                       >Delete</v-btn>
              </div>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row
          class="mt-2"
          align="center"
          justify="center"
        >
          <span class="dark--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                class="ml-2"
                v-bind="attrs"
                v-on="on"
                color="#1A1A1A"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>


          <v-btn
            fab
            dark
            color="#FFC600"
            style="color:black;"
            class="mr-1 border border-dark"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            style="color:black;"
            color="#FFC600"
            class="ml-1 border border-dark"
            @click="nextPage"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
          <span
            class="mr-4
            dark--text"
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      itemsPerPageArray: [4, 8, 12],
      search: '',
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 8,
      sortBy: 'IntituleOffre',
      keys: [
        'Offer Number',
        'From',
        'To',
        'Address',
        'Description',
      ],
      items: [
        {
          IntituleOffre: 'Web dev',
          From: '12/06/2021',
          To: '12/06/2022',
          Address: 'bejaia',
          Description: 'Lorem ipsum dolor sit amet,',
        },
        {
          IntituleOffre: 'Web designer',
          From: '12/06/2021',
          To: '12/06/2022',
          Address: 'bejaia',
          Description: 'Lorem ipsum dolor sit amet,',
        },
        {
          IntituleOffre: 'Project manager',
          From: '12/06/2021',
          To: '12/06/2022',
          Address: 'bejaia',
          Description: 'Lorem ipsum dolor sit amet,',
        },
        {
          IntituleOffre: 'Data scientist',
          From: '12/06/2021',
          To: '12/06/2022',
          Address: 'bejaia',
          Description: 'Lorem ipsum dolor sit amet,',
        },
        {
          IntituleOffre: 'System admin',
          From: '12/06/2021',
          To: '12/06/2022',
          Address: 'bejaia',
          Description: 'Lorem ipsum dolor sit amet,',
        },
        {
          IntituleOffre: 'Electrician',
          From: '12/06/2021',
          To: '12/06/2022',
          Address: 'bejaia',
          Description: 'Lorem ipsum dolor sit amet,',
        },
        {
          IntituleOffre: 'Janitor',
          From: '12/06/2021',
          To: '12/06/2022',
          Address: 'bejaia',
          Description: 'Lorem ipsum dolor sit amet,',
        },
        {
          IntituleOffre: 'Delivery',
          From: '12/06/2021',
          To: '12/06/2022',
          Address: 'bejaia',
          Description: 'Lorem ipsum dolor sit amet,',
        },
        {
          IntituleOffre: 'Security manager',
          From: '12/06/2021',
          To: '12/06/2022',
          Address: 'bejaia',
          Description: 'Lorem ipsum dolor sit amet,',
        },
        {
          IntituleOffre: 'Translater',
          From: '12/06/2021',
          To: '12/06/2022',
          Address: 'bejaia',
          Description: 'Lorem ipsum dolor sit amet,',
        },
      ],
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter(key => key !== 'Name');
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
  },
};
</script>
