const homePage = {
  template: `
    <v-ons-page>
      <h2>Page1</h2>
      <v-ons-button @click="changeTab">Change tab via tabbar</v-ons-button>
      <v-ons-button @click="changeButton">Change tab via segment</v-ons-button>
      <v-ons-button @click="logIndexes">Log current button index</v-ons-button>
    </v-ons-page>
  `,
  props: ['changeTab', 'changeButton', 'logIndexes']
};

const tabPage = {
  template: `
    <v-ons-page>
      <h2>{{title}}</h2>
      <v-ons-button @click="logIndexes">Log current button index</v-ons-button>
    </v-ons-page>
  `,
  props: ['title', 'logIndexes']
};

new Vue({
  el: '#app',
  template: '#main',
  data() {
    return {
      segmentIndex: 0,
      segment2Index: 1,
      tabbarIndex: 0,
      tabs: [
        {
          page: homePage,
          props: {
            changeTab: this.changeTab,
            changeButton: this.changeButton,
            logIndexes: this.logIndexes
          },
          key: "homePage"
        },
        {
          page: tabPage,
          props: {
            title: 'Page2',
            logIndexes: this.logIndexes
          },
          key: "page2"
        },
        {
          page: tabPage,
          props: {
            title: 'Page3',
            logIndexes: this.logIndexes
          },
          key: "page3"
        }
      ]
    };
  },
  methods: {
    log(...args) {
      console.log(...args)
    },
    changeTab() {
      this.tabbarIndex = 1
    },
    changeButton() {
      this.segmentIndex = 1
    },
    logIndexes() {
      console.log('active button index', this.segmentIndex);
      console.log('active tab index', this.tabbarIndex);
    }
  }
}); // all yours
