<template>
  <v-ons-page>
    <custom-toolbar title="Home" :action="toggleMenu"></custom-toolbar>
    <p style="text-align: center">
      Welcome home.
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
