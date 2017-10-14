<template>
  <div id="splitter">
      <ons-page id="splitter1page">
        <ons-splitter id="splitter.page">
          <ons-splitter-side id="menu" side="right" width="150px" collapse swipeable>
            <ons-page id="menu-page">
              <ons-list>
                <ons-list-item tappable><!-- onclick="menuChosen('settings.html')" -->
                  <i class="fa fa-cog"></i>&nbsp;<span id="lblsettings">Settings</span>
                </ons-list-item>
                <ons-list-item tappable><!-- onclick="menuChosen('help.html') -->
                  <i class="fa fa-question-circle"></i>&nbsp;<span id="lblhelp">Help</span>
                </ons-list-item>
              </ons-list>
            </ons-page>
          </ons-splitter-side>
          <ons-splitter-content id="splitter.content" page="main.html"></ons-splitter-content>
        </ons-splitter>
      </ons-page>
    </ons-template>
  </div>
</template>
<script>
export default {
  name: "splitter",
  data: () => ({})
}
</script>
<style lang="scss" scoped>
</style>
