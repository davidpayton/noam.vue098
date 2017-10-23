<template>
  <div id="toptoolbar">
    <v-ons-toolbar id="mainpg-toolbar" class="bar-center">
      <button class="toolbar-button">
        <i class="fa fa-comments" class="toptoolbar-icon"></i>
        <!-- todo: if no icons: Assist -->
      </button>
      <span class="stretcher"></span>
      <button class="toolbar-button">
        <span class="fontbau">noam</span>
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
    </v-ons-toolbar>
  </div>
</template>
<script>
export default {
  name: "toptoolbar",
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu')
    }
  }
  data: () => ({
  })
}
<style>
  .toptoolbar-icon: {
    font-size:'17px';
  }
</style>
