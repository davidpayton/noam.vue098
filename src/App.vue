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

  export default{
    data() {
      return {
        pageStack: [pg1welcome]
      };
    },

    created() {
      bus.$on('push-page', (evt) => {
        this.pageStack.push(evt)
      })
    }
  };
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
</script>
