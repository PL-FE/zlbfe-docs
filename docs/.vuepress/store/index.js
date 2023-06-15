import Vue from 'vue';
import Vuex from 'vuex';
import user from 'rsk-common/store/user';
import global from 'rsk-common/store/global';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    global,
  },
});

export default store;
