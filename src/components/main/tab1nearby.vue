<!-- todo card 1 from mainContent goes here -->
<!-- Vuetifyjs Expansion panel (accordion) -->
<template>
  <v-ons-card id="tab1nearby" :class="{'hidetab' : !isTabSelected(1)}">
    <div class="title bar-center">{{lblNear}} {{msgBeaconFullname}}</div>
    <div class="content"</div><!-- style="overflow: auto"> -->
      <v-ons-list>
        <div id="nearbyPoi" v-for="(item, index) in nearbypois">
          <v-ons-list-item  tappable class="accordion"
            @click="toggleOpened">&nbsp;&nbsp; {{ item.poiname }}
          </v-ons-list-item>
          <div class="panel">
            {{ item.poiinstruct }}
            <!--
            <v-ons-list>
              <v-ons-list-item v-for="item in "></v-ons-list-item>
            </v-ons-list>
          -->
          </div>
        </div>
      </v-ons-list>
    </div>
  </v-ons-card>
</template>
<script>
export default {
  name: "tab1nearby",

  // todo:
  data(){
    return {
      lblNear: "Near",
      msgBeaconFullname: "msgloc_ My Location 1",
      nearbypois: [
        { poiname: "toilets", poiinstruct: "go to here then to there" },
        { poiname: "poi1", poiinstruct: "go to here then to here" },
        { poiname: "poi2", poiinstruct: "go to there then to there" },
        { poiname: "poi3", poiinstruct: "go to there then to here" },
        { poiname: "bank", poiinstruct: "go to here1 then to there" },
        { poiname: "shul", poiinstruct: "go to here2 then to there" },
        { poiname: "other stuff", poiinstruct: "go to here3 then to there" },
        { poiname: "bed", poiinstruct: "go to here4 then to there" },
        { poiname: "matress", poiinstruct: "go to here5 then to there" },
        { poiname: "toilets2", poiinstruct: "go to here6 then to there" }
      ]
    }
  },

  methods: {
    isTabSelected(i){
      return (this.$store.state.tabidx == i);
    },
    toggleOpened: function(event){
      event.currentTarget.classList.toggle("active");
      event.currentTarget.nextElementSibling.classList.toggle("show");
    }
  }
}
</script>
