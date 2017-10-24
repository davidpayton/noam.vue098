<template>
  <v-ons-page id="settings">
    <custom-toolbar title="Settings" :action="toggleMenu"></custom-toolbar>
    <p style="text-align: center">
      Settings.
    </p>
  </v-ons-page>
</template>
<script>
import toptoolbar from '../../toptoolbar'

export default {
  props: ['toggleMenu'],
  components: { toptoolbar },
}
</script>
<style>
</style>
