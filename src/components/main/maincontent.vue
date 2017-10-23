<template>
  <div id="maincontent">
    <!--  === mainToolbar component  (talk | NOAM  | ...) -->
    <toptoolbar></toptoolbar>
    <maintabbar></maintabbar>
    <!-- <v-ons-toolbar id="loc-tbar" class="txt-center"> -->
    <div id="location-line" class="ons-toolbar bar-center">
      <button class="toolbar-button">
        <span id="msgbeacon">{{msgBeaconFullname}}</span><br />
      </button>
    </div>
    <!-- </v-ons-toolbar> -->

    <div id="orientation-line">
      <div id="orient-tbar" class="ons-toolbar bar-center">
        <button class="toolbar-button">
          <small>
            <strong>{{lblNowPointing}}:</strong>
            <span id="direction-txt">{{msgDirection}}</span>
          </small>
        </button>
      </div>
    </div>

    <!-- === tabs === -->
    <tab1nearby></tab1nearby>
    <tab2thisway></tab2thisway>
    <tab3inplace></tab3inplace>
  </div>
</template>
<script>
import toptoolbar from './toptoolbar'
import maintabbar from './maintabbar'

import tab1nearby from './tab1nearby'
import tab2thisway from './tab2thisway'
import tab3inplace from '.tab3inplace'

export default {
  name: "maincontent",
  components: {
    toptoolbar, maintabbar,
    tab1nearby, tab2thisway, tab3inplace
  },
  data: () => ({
    // orientation line
    lblNowPointing: "Now pointing",
    msgDirection: "North-East",

    // location line
    lblInThisDirection: "In this direction",
    lblInThisPlace: "In this __",
    msgBeaconFullname: "msgloc_ My Location 1",
  })
}
</script>
