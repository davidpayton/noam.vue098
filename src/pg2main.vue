<template>
  <v-ons-page id="pg2main"> <!-- changed from id="page.main" -->
    <!-- I think. OR: you have to give the template an id... or its automatically by vue pg2main.vue -->
    <div id="mainpg-toolbar" class="ons-toolbar bar-center">
      <button class="toolbar-button">
        <i class="fa fa-comments" style="font-size:17px"></i>
        <!-- if no icons: Assist -->
      </button>
      <span class="stretcher"></span>
      <button class="toolbar-button">
        <span class="fontbau">noam</span>
      </button>
      <span class="stretcher"></span>
      <button id="mainpage-menubtn" class="toolbar-button pull-right"><!-- onclick="openMenu(2)"> -->
        <!-- toolbar-button-outline -->
        <i class="fa fa-ellipsis-v" style="font-size:17px"></i>
        <!-- if no icons: Settings-->
      </button>
    </div>

    <v-ons-toolbar id="loc-tbar" class="bar-center">
      <button class="toolbar-button"><span id="msgbeacon">{{msgBeaconFullname}}</span></button>
    </v-ons-toolbar>
    <maintabbar></maintabbar>

    <div id="orientation-line">
      <div id="orient-tbar" class="ons-toolbar bar-center">
        <button class="toolbar-button">
          <small>
            <strong>{{lblDirection}}:</strong>
            <span id="direction-txt">{{msgDirection}}</span>
          </small>
        </button>
      </div>
    </div>



    <!-- todo: Rafael in future to make these into components. Not now... -->
    <v-ons-card id="card1" :class="{'hidetab' : !isTabSelected(1)}">
      <div class="title">{{lblNear}} {{msgBeaconFullname}}</div>
      here goes the accordion
    </v-ons-card>
    <v-ons-card id="card2" :class="{'hidetab' : !isTabSelected(2)}">
      <v-ons-page>
        <splitter></splitter>
      </v-ons-page>
    </v-ons-card>
    <v-ons-card id="card3" :class="{'hidetab' : !isTabSelected(3)}">
      <div class="title">{{lblInThisPlace}}</div>
      here goes the accordion 3
    </v-ons-card>
  </v-ons-page>
</template>

<script>
import maintabbar from './components/maintabbar'
import splitter from './components/splitter'
export default {
  key: 'pg2main',
  components: { maintabbar, splitter },
  methods: {
    isTabSelected(i){
      return (this.$store.state.tabidx == i);
    }
  },
  data(){ return {
      msgBeaconFullname: "msgloc_ My Location 1",
      lblDirection: "Now pointing",
      msgDirection: "North-East",
      lblNear: "Near",
      lblInThisDirection: "In this direction",
      lblInThisPlace: "In this building",
    };
  },
}
</script>
