<template>
<div>
<v-ons-navigator swipeable
    :page-stack="pageStack"
></v-ons-navigator>
</div>
</template>

<script>
import pg1welcome from './pg1welcome.vue';
import bus from './bus.js'
import Vue from 'vue'
import Vuex from 'vuex'

  Vue.use(Vuex)

  const store = new Vuex.Store({
    debug: true,
    state: {
      tabidx : 1
    },
    mutations: {
      tabto(idx){
        if (this.debug) console.log('tabto: ', idx )
        state.tabidx = i
      }
    }
  })

  export default{
    data() {
      return {
        pageStack: [pg1welcome],
        store: store 
      };
    },

    created() {
      bus.$on('push-page', (evt) => {
        this.pageStack.push(evt)
      })
    }
  };

</script>
