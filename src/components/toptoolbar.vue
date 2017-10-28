<template>
  <div id="toptoolbar">
  <div id="thetoolbar" class="ons-toolbar bar-center bar-margins">
    <button class="toolbar-button">
      <i class="fa fa-comments toptoolbar-icon"></i>
      <!-- todo: if no icons: Assist -->
    </button>
    <span class="stretcher"></span>
    <button class="toolbar-button">
      <span class="fontbau center">noam</span>
    </button>
    <span class="stretcher"></span>
    <button id="mainpage-menubtn" class="toolbar-button pull-right"
            @click="toggleMenu()">
            <!-- toolbar-button-outline -->
      <!-- == the menu icon!  == -->
      <v-ons-icon icon="ion-navicon, material:md-menu" class="toptoolbar-icon"></v-ons-icon>
      <!-- x <i class="fa fa-ellipsis-v" style="font-size:17px"></i> -->
      <!-- todo: if setup to run with no icons, text: "More..." -->
    </button>
  </div>
  <!-- </v-ons-toolbar> -->
</div>
</template>
<script>
export default {
  name: "toptoolbar",

  data(){
    return {
      store: this.$store
    }
  },

  methods: {
    toggleMenu(){
       this.store.commit('toggleMenu')
    }
  },
}
</script>
<style>
  .toptoolbar-icon: {
    font-size:'17px';
  }
</style>
