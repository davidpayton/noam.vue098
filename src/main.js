import 'onsenui';
import Vue from 'vue';
import Vuex from 'vuex';
import VueOnsen from 'vue-onsenui';

// Onsen UI Styling and Icons
import 'onsenui/css-components-src/src/onsen-css-components.css';
import 'onsenui/css/onsenui.css';
import 'css/style.css';

import App from './App.vue';

Vue.use(VueOnsen);
Vue.use(Vuex);

new Vue({
  el: '#app',
  components: { App },
  template: '<app></app>',
});
