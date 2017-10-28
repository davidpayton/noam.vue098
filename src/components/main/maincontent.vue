<template>
  <v-ons-page id="maincontent">
    <!--  === mainToolbar component  (talk | NOAM  | ...) -->
<!--
  PROBLEM: page content pushed to left (top-toolbar not full width)
-->
    <toptoolbar></toptoolbar>
    <!-- <v-ons-toolbar id="loc-tbar" class="txt-center"> -->
    <div id="location-line" class="bar-center">
      <div><!-- class smaller centered text -->
      <!-- class="toolbar-button"> -->
        <span id="msgbeacon">{{msgBeaconFullname}}</span><br />
      </div>
    </div>
    <maintabbar></maintabbar>

    <div id="orientation-line">
      <div id="orient-tbar" class="bar-center">
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

</v-ons-page>
</template>
<script>
import toptoolbar from '../toptoolbar'
import maintabbar from './maintabbar'

import tab1nearby from './tab1nearby'
import tab2thisway from './tab2thisway'
import tab3inplace from './tab3inplace'

export default {
  name: "maincontent",
  components: {
    toptoolbar, maintabbar,
    tab1nearby, tab2thisway, tab3inplace
  },
  data(){
    return {
      // orientation line
      lblNowPointing: "Now pointing",
      msgDirection: "North-East",

      // location line
      lblInThisDirection: "In this direction",
      msgBeaconFullname: "msgloc_ My Location 1"
    }
  }
}
</script>
