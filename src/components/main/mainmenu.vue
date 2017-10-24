<template>
  <div id="mainmenu">
    <v-ons-page>
      <v-ons-list>
        <v-ons-list-item tappable @click="currentPage='settings'">
          <i class="fa fa-cog"></i>&nbsp;<span id="lblsettings">{lblSettings}</span>
        </v-ons-list-item>
        <v-ons-list-item tappable @click="currentPage='help'">
          <i class="fa fa-question-circle"></i>&nbsp;<span id="lblhelp">{lblHelp}</span>
        </v-ons-list-item>
      </v-ons-list>
    </v-ons-page>
  </div>
</template>
<script>
//import maincontent from './maincontent'
import settings from '../more/settings/settings'
import help from '../more/help/help'


export default {
  name: "mainmenu",
  computed: {
    currentPage: {
      get: function(){ return this.$store.state.currentPage; },
      set: function(newValue){ this.$store.commit('setCurrentPagename', newValue)}
    }
  },
  data: () => ({
    //currentPage: this.$store.state.currentPage,
    pages: ['maincontent', 'help', 'settings'],
    openSide: false,
    lblSettings: 'Settings',
    lblHelp:     'Help'
  })
}
</script>
