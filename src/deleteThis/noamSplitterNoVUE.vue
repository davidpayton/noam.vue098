<template>
  <div id="splitter">
    <!--  etc. etc. -->
      <v-ons-page id="splitter1page">
        <v-ons-splitter id="splitter.page">
          <v-ons-splitter-side id="menu" side="right" width="150px" collapse swipeable>
            <v-ons-page id="menu-page">
              <v-ons-list>
                <v-ons-list-item tappable>
                  <!-- Here's the jquery code. That needs to become VUE.
                   onclick="menuChosen('settings.html')"
                   of course we need a settings.vue and a help.vue series of pages each
                   example: settings1.vue settings2.vue   with NEXT and DONE.
                   DONE closes the settings page and takes me back to pg2main with tab as last selected...
                   Lets try and see how much can be done now. Just first make a single settings and a single help.
                   OK? ok, can i start?
                   yes. sorry.
                   oh, so lets go..
                 -->

                  <i class="fa fa-cog"></i>&nbsp;<span id="lblsettings">Settings</span>
                </v-ons-list-item>
                <v-ons-list-item tappable><!-- onclick="menuChosen('help.html') -->
                  <i class="fa fa-question-circle"></i>&nbsp;<span id="lblhelp">Help</span>
                </v-ons-list-item>
                <!-- TODO:  Rafael - not now, will find how to get Atom.io to autocomplete vue-onsenui if at all possible -->
              </v-ons-list>
            </v-ons-page>
          </v-ons-splitter-side>
          <!--  next line is which main page this is on. -->
          <v-ons-splitter-content id="splitter.content" page="pg2main.html"></v-ons-splitter-content>
        </v-ons-splitter>
      </v-ons-page>
    </v-ons-template>
  </div>
</template>
<script>
export default {
  // wait...
  name: "splitter",
  data: () => ({})
}
</script>
<style lang="scss" scoped>
</style>
