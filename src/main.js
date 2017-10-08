import 'onsenui';
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';

// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');
require('css/style.css');

import App from './App.vue';

Vue.use(VueOnsen);

new Vue({
  el: '#app',
  components: { App },
  template: '<app></app>',
});
