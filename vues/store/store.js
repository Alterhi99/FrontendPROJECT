import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';

Vue.use(Vuex);
/* eslint-disable */
export default new Vuex.Store({
    state: {
        auth: false,
        role: "",
        anyotherproperty:""
    },
    getters: {
        getRole: state => {
            return state.role;
        },
        getAuth: state => {
            return state.auth;
        },
    },
    plugins: [
        createPersistedState({
            paths: ['auth', 'role'],
            storage: {
                getItem: (key) => Cookies.get(key),
                setItem: (key, value) =>
                    Cookies.set(key, value, { expires: 7}),
                removeItem: (key) => Cookies.remove(key),
            },
        }),
    ],
    mutations: {
        //mutation will change the states like auth and role
        setAuthentification(state,status){
           state.auth = status;
        }
    },
    actions: { //your actions which commit a mutation
    }
});
