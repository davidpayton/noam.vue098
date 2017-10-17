import 'onsenui';
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import store from './store.js'

// Onsen UI Styling and Icons
import 'onsenui/css-components-src/src/onsen-css-components.css';
import 'onsenui/css/onsenui.css';
import 'css/style.css';

import App from './App.vue';

Vue.use(VueOnsen);

new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<app></app>',
});
