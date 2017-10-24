<template>
  <v-ons-page> <!-- changed from id="page.main" -->
    <v-ons-splitter>
      <!-- todo: move v-ons-splitter-side into components/mainmenu.vue  -->
      <v-ons-splitter-side
        swipeable width="150px"
        collapse=""
        side="right"
        :open.sync="menuShown"
      >
      </v-ons-splitter-side>

      <!-- === Background Content ===  -->
      <!-- the page before clicked on and after clicked on -->
      <v-ons-splitter-content>
        <component :is="currentPage">
          <!-- :toggle-menu="() => menuShown = !menuShown;"  -->
        </component>
        <!-- todo: move v-ons-splitter-content into maincontent   -->

      </v-ons-splitter-content>
    </v-ons-splitter>


  </v-ons-page>
</template>

<script>
//x import maintabbar from './components/main/maintabbar'
//x import splitter from './components/splitter'
import mainmenu    from './components/main/mainmenu'

// todo: try remove these or the latter two, and in data.pages below
import maincontent from './components/main/maincontent'
import settings    from './components/more/settings/settings'
import help        from './components/more/help/help'

export default {
  key: 'pg2main',
  components: { mainmenu, maincontent }, // todo: try remove maincontent
  data(){
    return {
      menuShown: this.$store.state.menuShown,
      // todo: try remove these or the latter two
      pages: [ maincontent, settings, help ],
      currentPage: this.$store.state.currentPagename
    };
  },
}
</script>
