<template>
  <v-ons-page id="pg2mainpage"> <!-- changed from id="page.main" -->
    <splitter></splitter>

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
        <!-- if no icons: More... -->
      </button>
    </div>

    <maintabbar></maintabbar>
    <!-- <v-ons-toolbar id="loc-tbar" class="txt-center"> -->
    <div id="loc-tbar" class="ons-toolbar bar-center">
      <button class="toolbar-button">
        <span id="msgbeacon">{{msgBeaconFullname}}</span><br />
      </button>
    </div>
    <!-- </v-ons-toolbar> -->

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
      <div class="title bar-center">{{lblNear}} {{msgBeaconFullname}}</div>
      <div class="content" style="overflow: auto"></div>
        <v-ons-list>
            <!-- <v-ons-list-header></v-ons-list-header> -->
            <v-ons-list-item>accordion 1</v-ons-list-item>
            <v-ons-list-item>accordion 2</v-ons-list-item>
            <v-ons-list-item>accordion 3</v-ons-list-item>
            <v-ons-list-item>accordion 4</v-ons-list-item>
            <v-ons-list-item>accordion 5</v-ons-list-item>
            <v-ons-list-item>accordion 6</v-ons-list-item>
            <v-ons-list-item>accordion 7</v-ons-list-item>
            <v-ons-list-item>accordion 8</v-ons-list-item>
            <v-ons-list-item>accordion 9</v-ons-list-item>
        </v-ons-list>
      </div>
    </v-ons-card>
    <v-ons-card id="card2" :class="{'hidetab' : !isTabSelected(2)}">
        card 2 content here with accordion
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
