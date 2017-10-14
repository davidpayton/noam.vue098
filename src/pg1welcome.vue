<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Welcome</div>
    </v-ons-toolbar>
    <p style="text-align: center">
      This is the first page
      <v-ons-button @click="push">Push Page 2</v-ons-button>
    </p>
  </v-ons-page>
</template>

<script>
import bus from './bus.js'
import pg2main from './pg2main.vue'
  export default{
    methods: {
      push() {
        bus.$emit('push-page', pg2main);
      }
    }
  }
</script>
