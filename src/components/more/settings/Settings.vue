<template>
  <v-ons-page>
    <custom-toolbar title="Settings" :action="toggleMenu"></custom-toolbar>
    <p style="text-align: center">
      Settings.
    </p>
  </v-ons-page>
</template>
<script>
import customToolbar from './toptoolbar'

export default {
  props: ['toggleMenu'],
  components: { topToolbar },
}
</script>
<style>
</style>
