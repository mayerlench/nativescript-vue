import Vuex from 'vuex';
import Vue from "nativescript-vue";
import test from './test'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        test
    },
    strict: 'debug',
})
Vue.prototype.$store = store;
export default store
