<template>
  <v-ons-page id="help">
    <custom-toolbar title="Help" :action="toggleMenu"></custom-toolbar>
    <p style="text-align: center">
      Help me !!
    </p>
  </v-ons-page>
</template>
<script>
import customToolbar from '../../toptoolbar'

export default {
  props: ['toggleMenu'],
  components: { customToolbar },
}
</script>
