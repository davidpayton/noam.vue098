<!-- todo: card2 from maincontent goes here -->
<template>
  <v-ons-card id="tab2thisway" :class="{'hidetab' : !isTabSelected(2)}">
      card 2 content here with accordion
  </v-ons-card>
</template>
<script>
export default {
  name: "tab2thisway",
  methods: {
    isTabSelected(i){
      return (this.$store.state.tabidx == i);
    }
  },

  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
