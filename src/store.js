import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  debug: true,
  state: {
    tabidx: 1,
    menuShown: false,
    currentPagename: 'maincontent'
  },
  mutations: {
    tabto(state, idx){
      //console.log(this.state.tabidx)
      state.tabidx = idx
    },
    toggleMenu(state){
      state.menuShown = !state.menuShown
    },
    setCurrentPagename(state, pagename){
      state.currentPage = pagename
    }
  }
})
