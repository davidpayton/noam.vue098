<!-- todo card 1 from mainContent goes here -->
<template>
  <v-ons-card id="tab1nearby" :class="{'hidetab' : !isTabSelected(1)}">
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
</template>
<script>
export default {
  name: "tab1nearby",
  methods: {
    isTabSelected(i){
      return (this.$store.state.tabidx == i);
    }
  },
  data: () => ({
      lblNear: "Near",
      msgBeaconFullname: "msgloc_ My Location 1"
  })
}
</script>
<!--<style lang="scss" scoped>
</style>-->
