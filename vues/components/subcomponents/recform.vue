<!--  /* eslint-disable */ -->
<!-- eslint-disable max-len -->
<template>
<validation-observer ref="observer" v-slot="{ invalid }" :hidden="!tdd">
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
      <v-select v-model="select" :items="items" :error-messages="errors" label="Type" data-vv-name="select" required></v-select>
    </validation-provider>
    <validation-provider v-slot="{ errors }" name="Nom Entreprise" rules="required|max:26">
      <v-text-field v-model="nomEntr" :counter="26" :error-messages="errors" label="Nom entreprise" required></v-text-field>
    </validation-provider>
    <validation-provider v-slot="{ errors }" name="Numéro Offre" rules="required|max:26">
      <v-text-field v-model="numOffre" :counter="26" :error-messages="errors" label="Numéro offre" required></v-text-field>
    </validation-provider>
    <validation-provider v-slot="{ errors }" rules="required" name="checkbox">
      <v-checkbox v-model="checkbox" :error-messages="errors" value="1" label="Option" type="checkbox" required></v-checkbox>
    </validation-provider>

    <v-btn class="mr-4" type="submit" :disabled="invalid">
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
</validation-observer>
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
import {td} from "../Upgrade";

setInteractionMode('eager');

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

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },

  data: () => ({
    tdd:this.td,
    nom: '',
    prenom: '',
    email: '',
    select: null,
    nomEntr: '',
    numOffre: '',
    items: [
      'Type 1',
      'Type 2',
    ],
    checkbox: null,
  }),

  methods: {
    submit() {
      this.$refs.observer.validate()
    },
    clear() {
      this.name = ''
      this.phoneNumber = ''
      this.email = ''
      this.select = null
      this.checkbox = null
      this.$refs.observer.reset()
    },

  },
}
</script>
