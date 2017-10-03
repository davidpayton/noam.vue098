<template id="main">
  <v-ons-navigator
    :page-stack="pageStack"
    @push-page="pageStack.push($event)">
  </v-ons-navigator>
  
</template>
<script>
  export default{
    data() {
      return {
        title: 'Noam v.098.vue'
      };
    },
    methods: {
      bla() {
        //this.$ons.notification.alert('Onsen UI here');
      }
    }
  };
</script>
