<!--
@Author: Hichem Aitouakli <Hayden>
@Date:   2021-05-25T19:31:39+01:00
@Email:  alterhichem99@gmail.com
@Project: Jobhunt
@Last modified by:   Hayden
@Last modified time: 2021-06-13T21:23:51+01:00
-->
<template><!-- eslint-disable --> <!-- eslint-disable max-len -->
  <v-row justify="center">
      <v-card class="mr-5 m-5">
        <v-card-title>
          <span class="text-h5">Add Offer</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="input.IntituleOffre"
                  label="Entitled*"
                  required
                  background-color="grey lighten-2"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model ="input.Lieu"
                  label="Address*"
                  required
                  prepend-inner-icon="mdi-map-marker"
                  background-color="grey lighten-2"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="input.Description"
                  label="Description*"
                  required
                  background-color="grey lighten-2"
                ></v-textarea>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
              <v-row>
                 <v-col
                  cols="12"
                  sm="6"
                  md="4"
                  >
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="From"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      no-title
                      scrollable
                      dark
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="menu = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col
                 cols="12"
                 sm="6"
                 md="4"
                 >
                 <v-menu
                   ref="menu2"
                   v-model="menu2"
                   :close-on-content-click="false"
                   :return-value.sync="date2"
                   transition="scale-transition"
                   offset-y
                   min-width="auto"
                 >
                   <template v-slot:activator="{ on, attrs }">
                     <v-text-field
                       v-model="date2"
                       label="To"
                       prepend-icon="mdi-calendar"
                       readonly
                       v-bind="attrs"
                       v-on="on"
                     ></v-text-field>
                   </template>
                   <v-date-picker
                     v-model="date2"
                     no-title
                     scrollable
                     dark
                   >
                     <v-spacer></v-spacer>
                     <v-btn
                       text
                       color="primary"
                       @click="menu2 = false"
                     >
                       Cancel
                     </v-btn>
                     <v-btn
                       text
                       color="primary"
                       @click="$refs.menu2.save(date2)"
                     >
                       OK
                     </v-btn>
                   </v-date-picker>
                 </v-menu>
               </v-col>
               </v-row>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="this.$router.go()"
            color="white"
            background-color="#1A1A1A"
          >
            Close
          </v-btn>
          <v-btn
            text
            @click="addOffer"
            background-color="#FFC600"
            color="#1A1A1A"
          >
            Add
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
  </v-row>
</template>
<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default { /* eslint-disable */
  data: () => ({
    dialog: false,
    date: new Date().toISOString().substr(0, 10),
    date2: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    modal2: false,
    input: {
      IntituleOffre: '',
      Datedebut: '',
      DateFin: '',
      Lieu: '',
      Description: '',
    },
  }),
  methods: {
    validate() {     // validate si vide or not mdr dont laugh plz
      const keys = Object.keys(this.input);
      keys.forEach((key, index) => {
        if (this.input[key] !== null && this.input[key] !== '') { return false; }
      });
      return true;
    },
    addOffer(evt) {   // function to add offer duhhhhhh
      evt.preventDefault();
      this.input.Datedebut = this.date.toLocaleDateString();
      this.input.DateFin = this.date2.toLocaleDateString();
      const kek = JSON.stringify(this.input);
      console.log(kek);
      console.log(this.date);
      if (this.validate()) {
        axios.post('http://localhost:3000/AdOffer',
          {
            IntituleOffre: this.input.IntituleOffre,
            Datedebut: this.input.Datedebut,
            DateFin: this.input.DateFin,
            Lieu: this.input.Lieu,
            Description: this.input.Description,
          },
        ).then((response) => {
          Swal.fire({
            title: 'Success!',
            text: 'Offer has been successfully added!',
            type: 'success',
          }).then(function () {
            this.$router.go();         // WHY DOESN'T THIS WORRRRRRRRRRRRRRKKKKKKKKKKK AAAAAAAAAAAAAAAAAAAAAAAAAAA
          });
        }).catch((e) => {
          console.log(e);
          this.errors.push(e);
          Swal.fire('Error!', `${e}`, 'error');
        });
      }
    },
  },
};
</script>
