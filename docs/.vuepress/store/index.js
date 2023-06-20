import Vuex from 'vuex';
import user from 'rsk-common/store/user';
import global from 'rsk-common/store/global';
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user,
    global,
  },
});

export default store;
