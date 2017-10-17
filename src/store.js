import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); 

export default new Vuex.Store({
  debug: true,
  state: {
    tabidx: 1
  },
  mutations: {
    tabto(state, idx){
      console.log(this.state.tabidx)
      state.tabidx = idx
    }
  }
})
