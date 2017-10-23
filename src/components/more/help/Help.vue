<template>
  <v-ons-page>
    <custom-toolbar title="Help" :action="toggleMenu"></custom-toolbar>
    <p style="text-align: center">
      Help me !!
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
