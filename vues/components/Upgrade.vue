<!--
@Author: Hichem Aitouakli <Hayden>
@Date:   2021-05-15T19:31:14+01:00
@Email:  alterhichem99@gmail.com
@Project: Jobhunt
@Last modified by:   Hayden
@Last modified time: 2021-06-13T16:39:46+01:00
-->
<template>
<v-layout row wrap>
  <v-flex xl>
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
      dense item-key="id" calculate-widths :headers="headers" :items="recruiters" sort-by="id" :show-select="role" >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>
            <v-select
            v-model="tableSelect"
            :items="tableSelectItems"
            item-text="state"
            item-value="abbr"
            label="Select"
            return-object
            single-line
            item-color="#2B9EB3"
            ></v-select>
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
            <vue-json-to-csv :json-data="recruiters" :csv-title="'Users'">
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
    </v-layout>
  <v-layout align-baseline width="100vw" height="100vw" right="10px">
  <validation-observer  ref="observer" v-slot="{ invalid }" :hidden="!td">
    <form @submit.prevent="submit">
      <validation-provider v-slot="{ errors }" name="Nom" rules="alpha_spaces|required|max:26">
        <v-text-field v-model="nom" :counter="26" :error-messages="errors" label="Nom" required></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{ errors }" name="Prénom" rules="alpha_spaces|required|max:26">
        <v-text-field v-model="prenom" :counter="26" :error-messages="errors" label="Prénom" required></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{ errors }" name="email" rules="required|email">
        <v-text-field v-model="email" :error-messages="errors" label="E-mail" required></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{ errors }" name="type" rules="required">
        <v-select v-model="select" :items="items" :error-messages="errors" label="Rôle" data-vv-name="select" required></v-select>
      </validation-provider>
      <validation-provider v-slot="{ errors }" name="NomEntreprise" rules="required|max:26">
        <v-text-field v-model="nomEntr" :counter="26" :error-messages="errors" label="Nom entreprise" required></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{ errors }" name="Password" rules="required|max:26">
        <v-text-field v-model="password" :counter="26" :error-messages="errors" label="Password" required></v-text-field>
      </validation-provider>
      <!--<validation-provider v-slot="{ errors }" rules="required" name="checkbox">
        <v-checkbox v-model="checkbox" :error-messages="errors" value="1" label="Option" type="checkbox" required></v-checkbox>
      </validation-provider>-->
      <v-btn style="background-color:#FFC600" large type="submit" :disabled="invalid">
        submit
      </v-btn>
      <v-btn dark large @click="clear">
        clear
      </v-btn>
    </form>
  </validation-observer>
  </v-layout>
</v-flex>
</v-layout>
</template>

<script type="text/javascript">
import {
  /* eslint-disable */
  alpha_spaces,
  required,
  digits,
  email,
  max,
  regex
} from 'vee-validate/dist/rules';
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from 'vee-validate';
import axios from 'axios';
import VueJsonToCsv from 'vue-json-to-csv';

/* eslint-disable */
setInteractionMode('eager');
// Validation des nombre de
extend('digits', {
  ...digits,
  message: '{_field_} needs to be {length} digits. ({_value_})',
});

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
});

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
});

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} does not match {regex}',
});

extend('email', {
  ...email,
  message: 'Email must be valid',
});

extend('alpha_spaces', {
  ...alpha_spaces,
  message: '{_field_} must contain only letters!',
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    VueJsonToCsv
  },
  data: () => ({
    td: false,
    dialog: false,
    dialogDelete: false,
    search: '',
    headers: [{
        text: 'Id',
        align: 'start',
        sortable: true,
        value: 'id',
        align: 'center',
        divider: 'true',
      },
      {
        text: 'Nom',
        value: 'nom',
        align: 'center',
        divider: 'true',
      },
      {
        text: 'Prénom',
        value: 'prenom',
        align: 'center',
        divider: 'true',
      },
      {
        text: 'Email',
        value: 'email',
        align: 'center',
        divider: 'true',
      },
      {
        text: 'Type',
        value: 'type',
        align: 'center',
        divider: 'true',
      },
      {
        text: 'Nom entreprises',
        value: 'nomEntreprise',
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
    recruiters: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    //##############################################################
    nom: '',
    prenom: '',
    email: '',
    select: null,
    nomEntr: '',
    password:'',
    numOffre: '',
    items: [
      'Jobseeker',
      'Recruiter',
    ],
    checkbox: null,
    tableSelect:{ state: 'Florida', abbr: 'FL' },
    tableSelectItems: [
          { state: 'Recruiter', abbr: 'FL' },
          { state: 'Jobseeker'},
        ],
    //###############################################################
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    handleSelectionChange(rows) {
      console.log(rows)
    },
    edit(index, row) {
      console.log(index)
    },
    del(index, row) {
      console.log(index)
    },
    initialize() {
      this.recruiters = [{
    "id": 1,
    "nom": "Lakeisha ",
    "prenom": "Chapman",
    "email": "lakeishachapman@zaphire.com",
    "type": "Recruiter",
    "nomEntreprise": "EXOZENT"
  },
  {
    "id": 2,
    "nom": "Rosalind ",
    "prenom": "Lane",
    "email": "rosalindlane@exozent.com",
    "type": "Recruiter",
    "nomEntreprise": "SHEPARD"
  },
  {
    "id": 3,
    "nom": "Leon ",
    "prenom": "Everett",
    "email": "leoneverett@shepard.com",
    "type": "Jobseeker",
    "nomEntreprise": "AUTOGRATE"
  },
  {
    "id": 4,
    "nom": "Deborah ",
    "prenom": "Cole",
    "email": "deborahcole@autograte.com",
    "type": "Recruiter",
    "nomEntreprise": "REMOLD"
  },
  {
    "id": 5,
    "nom": "Richards ",
    "prenom": "Walters",
    "email": "richardswalters@remold.com",
    "type": "Jobseeker",
    "nomEntreprise": "PYRAMIS"
  },
  {
    "id": 6,
    "nom": "Velez ",
    "prenom": "Fry",
    "email": "velezfry@pyramis.com",
    "type": "Jobseeker",
    "nomEntreprise": "MUSANPOLY"
  },
  {
    "id": 7,
    "nom": "Peggy ",
    "prenom": "Kelley",
    "email": "peggykelley@musanpoly.com",
    "type": "Jobseeker",
    "nomEntreprise": "BLEENDOT"
  },
  {
    "id": 8,
    "nom": "Joni ",
    "prenom": "Phelps",
    "email": "joniphelps@bleendot.com",
    "type": "Jobseeker",
    "nomEntreprise": "ANIXANG"
  },
  {
    "id": 9,
    "nom": "Odom ",
    "prenom": "Lancaster",
    "email": "odomlancaster@anixang.com",
    "type": "Jobseeker",
    "nomEntreprise": "SECURIA"
  },
  {
    "id": 10,
    "nom": "Downs ",
    "prenom": "York",
    "email": "downsyork@securia.com",
    "type": "Jobseeker",
    "nomEntreprise": "EVENTIX"
  },
  {
    "id": 11,
    "nom": "Berg ",
    "prenom": "Powell",
    "email": "bergpowell@eventix.com",
    "type": "Jobseeker",
    "nomEntreprise": "AQUASSEUR"
  },
  {
    "id": 12,
    "nom": "Madge ",
    "prenom": "Long",
    "email": "madgelong@aquasseur.com",
    "type": "Jobseeker",
    "nomEntreprise": "EMPIRICA"
  },
  {
    "id": 13,
    "nom": "Stephenson ",
    "prenom": "Petty",
    "email": "stephensonpetty@empirica.com",
    "type": "Jobseeker",
    "nomEntreprise": "ROBOID"
  },
      ]
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
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
  mounted(){
    this.$root.$on('reload', data => {
        console.log('reloading....');
        axios.get('http://localhost:3000/getOffers').then((resp) => {
          this.loadData(resp.data.data);
        });
    });
  },
};
export var td;
</script>
<!--
<vue-virtual-table class="table1" border :config="tableConfig" :data="tableData" :height="500" :itemHeight="55" :minWidth="1000" :selectable="true" :enableExport="true" v-on:changeSelection="handleSelectionChange">
  <template slot-scope="scope" slot="actionCommon">
    <button @click="edit(scope.index, scope.row)">
      <v-icon style="color:#0066ff">mdi-pencil</v-icon>
    </button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button @click="del(scope.index, scope.row)">
      <v-icon style="color:#1A1A1A">mdi-delete</v-icon>
    </button>
  </template>
</vue-virtual-table> -->
