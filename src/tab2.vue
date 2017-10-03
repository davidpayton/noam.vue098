<template>
  <div id="homePage">
    <v-ons-page>
      <h2>Page1</h2>
      <v-ons-button @click="changeTab">Change tab via tabbar</v-ons-button>
      <v-ons-button @click="changeButton">Change tab via segment</v-ons-button>
      <v-ons-button @click="logIndexes">Log current button index</v-ons-button>
    </v-ons-page>
  </div>
</template>
<script>
export default {
  name: "homePage",
  data: () => ({

  }),
  props: ['changeTab', 'changeButton', 'logIndexes']
}
</script>
<style lang="scss" scoped>
</style>
