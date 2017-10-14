<template id="maintabbar">
  <div id="maintabbar">
    <div id="maintabbaralign" class="bar-center">
      <v-ons-segment id="maintabs" style="width: 98%;">
        <button class="segment__item" @click="sharedState.tabto(1)">{{lblTab1}}</button>
        <button class="segment__item" @click="sharedState.tabto(2)">{{lblTab2}}
          <i class="fa fa-hand-o-up" style="fong-size:17px"></i></button>
        <button class="segment__item" @click="sharedState.tabto(3)"><span id="lbl-inspace">{{lblTab3}}</span></button>
      </v-ons-segment>
    </div>
  </div>
</template>

<script>
import store from '../App.vue'
import tab1nearby from './tab1nearby'
export default {
  name: "maintabbar",
  // data() {
  //   return { tabidx: 1 }
  // },
  data(){
    return {
      lblTab1: "Nearby",
      lblTab2: "This way",
      lblTab3: "In building"
      ,sharedState: store.state
    }
  }
}
</script>
