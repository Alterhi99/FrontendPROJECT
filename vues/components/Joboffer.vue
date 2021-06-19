<!--
@Author: Hichem Aitouakli <Hayden>
@Date:   2021-05-15T21:13:07+01:00
@Email:  alterhichem99@gmail.com
@Project: Jobhunt
@Last modified by:   Hayden
@Last modified time: 2021-06-13T16:40:45+01:00
-->
<template><!--/* eslint-disable */--> <!-- eslint-disable max-len -->
<v-layout flex wrap>
  <div id="up">
    <v-btn style="background-color:#FFC600" @click="enableTable" v-on:click="$emit(td)">
      View list
    </v-btn>
    <v-btn style="background-color:#1A1A1A;color:white"
     @click="disableTable" v-on:click="$emit(td)">
      Create
    </v-btn>
  </div>
  <!-- eslint-disable -->
    <v-layout class="vdata" row wrap child-flex fill-height width="100vw" height="100vw">
      <v-data-table  dark :search="search" :hidden="td" :disabled="td" loading loading-text="Loading... Please wait"
      dense item-key="id" calculate-widths :headers="headers" :items="offers" sort-by="id" :show-select="role" >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>
            Offers
           </v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-spacer/><v-spacer/><v-spacer/><v-spacer/><v-spacer/>
            <vue-json-to-csv :json-data="offers" :csv-title="'Users'">
                <v-btn color="success" class="mr-6">
                  Export <i class="mdi mdi-export-variant" aria-hidden="true"></i>
                </v-btn>
             </vue-json-to-csv>
            <v-row>
              <v-col>
                <v-text-field outlined dense v-model='search'
                append-icon="mdi-magnify" single-line label="Search">
                </v-text-field>
              </v-col>
            </v-row>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon style="color:#2B9EB3" small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon style="color:red" small @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="#1A1A1A" @click="initialize">
            Reset
          </v-btn>
        </template>
      </v-data-table>
      <joblist/>
      <jobform/>
    </v-layout>
</v-layout>
</template>
<script type="text/javascript">
import joblist from '@/components/subcomponents/joblist';
import jobform from '@/components/subcomponents/jobform';

/* eslint-disable */
export default {
  data() {
    return {
      title: "",
      offers:[],
      headers: [{              // FAKE BACKEND
          text: 'Number',
          align: 'start',
          sortable: true,
          value: 'NumOffre',
          align: 'center',
          divider: 'true',
        },
        {
          text: 'Entitled',
          value: 'IntituleOffre',
          align: 'center',
          divider: 'true',
        },
        {
          text: 'Debut date',
          value: 'Datedebut',
          align: 'center',
          divider: 'true',
        },
        {
          text: 'Finish date',
          value: 'email',
          align: 'center',
          divider: 'true',
        },
        {
          text: 'Address',
          value: 'Lieu',
          align: 'center',
          divider: 'true',
        },
        {
          text: 'Description',
          value: 'Description',
          align: 'center',
          divider: 'true',
        },
        /*{
          text: 'Numero Offre',
          value: 'numOffre',
          align: 'center',
          divider: 'true',
        },*/
        {
          text: 'Actions',
          value: 'actions',
          sortable: false,
          divider: 'true',
        },

      ],
    };
  },
  components: {
    joblist,
    jobform,
  },
  methods: {
    handleSelectionChange(rows) {      //usless functions
      console.log(rows)
    },
    edit(index, row) {
      console.log(index)
    },
    del(index, row) {
      console.log(index)
    },
    initialize() {
      this.offers= [{

      }]
    },

    editItem(item) {           // modifier
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {         //supprimer
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {        //confirmation de supprimer
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
    disableTable() {
      this.td = true;
    },
    enableTable() {
      this.td = false;
    },
    async submit() {
      if(this.$refs.observer.validate()){
        return axios({
          method: 'post',
          data: {
          Nom: this.nom,
          Prenom: this.prenom,
          Email: this.email,
          password: this.password,
          role:"Jobseeker",
          NomEntreprise:this.nomEntr,


          },
          url: 'http://localhost:3000/signup',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(() => {
          this.$swal(
            'Great!',
            'You have been successfully registered!',
            'success',
          );
          this.$router.push({ name: 'signup' });

        })
        .catch((error) => {
          const message = error.response.data.message;
          this.Swal.fire('Oh no!', `${message}`, 'error');
        });
      }
      return true;
    },
    clear() {
      this.nom = ''
      this.phoneNumber = ''
      this.email = ''
      this.select = null
      this.checkbox = null
      this.$refs.observer.reset()
    },
  },
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
