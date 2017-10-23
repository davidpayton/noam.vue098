<!-- todo: card3 goes here -->
<template>
  <v-ons-card id="tab3inplace" :class="{'hidetab' : !isTabSelected(3)}">
    <div class="title">{{lblInThisPlace}}</div>
    here goes the accordion 3
  </v-ons-card>
</template>
<script>
export default {
  name: "tab3inplace",
  methods: {
    isTabSelected(i){
      return (this.$store.state.tabidx == i);
    }
  },
  data: () => ({
    lblTab3: "In ",
    msgPlace: "the building"
  })
}
</script>
