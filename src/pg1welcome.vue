<template>
  <v-ons-page>
    <div>
      <br/><br/>
      <br/><br/>
    </div>

    <div id="app-welcome" style="text-align:center">
      <span id="msg-welcometo">Welcome to</span>
      <span id="msg-welcome-appname" class="fontbau">NOAM</span><br/>
      <span id="msg-yrassistant">Your indoor assistant</span>
    </div>

<!-- aaa -->
    <v-ons-alert-dialog id="bluetooth-dlg"
                        modifier="rowfooter"
                        :visible.sync="bluetoothDlgShown">
      <div class="alert-dialog-title">Blootooth is off</div>
      <div class="alert-dialog-content">
        <span id="msg-wlcm-turnblueton">Turn bluetooth on by swiping down from the top of your phone, and pressing the bluetooth
        <i class="fa fa-bluetooth"></i>
        icon.</span>
      </div>
      <div class="alert-dialog-footer">
        <button class="alert-dialog-button" @click="push">
          <span class="txt-ok">OK</span></button>
      </div>
    </v-ons-alert-dialog>

  </v-ons-page>
</template>

<script>
import bus from './bus.js'
import pg2main from './pg2main.vue'
  export default{
    data(){
      return { bluetoothDlgShown : true }
    },
    methods: {
      push() {
        this.bluetoothDlgShown = false;
        bus.$emit('push-page', pg2main);
      }
    }
  }
</script>
