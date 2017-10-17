<template>
  <v-ons-page>
    <custom-toolbar title="Settings" :action="toggleMenu"></custom-toolbar>
    <p style="text-align: center">
      Settings.
    </p>
  </v-ons-page>
</template>
<script>
import customToolbar from './customToolbar'

export default {
  props: ['toggleMenu'],
  components: { customToolbar },
}
</script>
<style>
</style>
