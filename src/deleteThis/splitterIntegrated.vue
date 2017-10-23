<template>
  <v-ons-template id="menuSplitter">
    <v-ons-splitter>
      <v-ons-splitter-side
        swipeable width="150px" collapse="" side="left"
        :open.sync="openSide"
      >
        <!-- === the menu, when shown === -->
        <!-- note: 4rafael:
            'comment.vue' was moved to src/deleteThis/noamSplitterNoVue.vue
        -->
        <v-ons-page>
          <v-ons-list>
            <v-ons-list-item tappable @click="currentPage='settings'">
              <i class="fa fa-cog"></i>&nbsp;<span id="lblsettings">{lblSettings}</span>
            </v-ons-list-item>
            <v-ons-list-item tappable @click="currentPage='help'">
              <i class="fa fa-question-circle"></i>&nbsp;<span id="lblhelp">{lblHelp}</span>
            </v-ons-list-item>
          <!-- example code
            <v-ons-list-item v-for="page in pages"
              tappable modifier="chevron"
              @click="currentPage = page; openSide = false"
            >
              <div class="center">{{ page }}</div>
            </v-ons-list-item>
          -->
          </v-ons-list>
        </v-ons-page>
      </v-ons-splitter-side>

      <!-- === Background Content ===  -->
      <!-- the page before clicked on and after clicked on -->
      <v-ons-splitter-content>
        <component :is="currentPage"
                   :toggle-menu="() => openSide = !openSide">
        </component>
      </v-ons-splitter-content>
    </v-ons-splitter>
  </v-ons-template>
</template>
<script>
  // todo: 4rafael:
  //   (you can search all project for 4rafael...  there are several)
  // 1. the initial page with the splitter hidden behind it is pg2mainpage.
  // 2. when click on pg2main.vue code line 15... splitter should be shown
  //    on top of pg2main with the two options: Settings and Help.
  // 3. when Settings clicked:  menuSplitter: hide, Settings.vue page:  show
  // 4. when Helped clicked:  menuSplitter: hide, Settings.vue page:  show
  // 6. Inside settings.vue when button "DONE " pressed, go back to page2main.
  // Suggestion: Maybe this should be done with the navigator defined in App.Vue,
  //    the "push" is used in the pg1welcome page on line 25
  import pg2main from '../pg2main'
  // todo: improve: remove extra ../components from path
  import settings from '../components/Settings'
  import help from '../components/Help'
  export default {
    data(){
      return {
        currentPage: 'pg2main',
        pages: ['pg2main', 'help', 'settings'],
        openSide: false,
        lblSettings: 'Settings',
        lblHelp: 'Help'
      };
    },
     components: {
       pg2main,
       settings,
       help,
     }
  };

  </script>
