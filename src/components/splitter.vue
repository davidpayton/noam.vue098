<template>
  <v-ons-template id="splitter">
    <v-ons-splitter>
      <v-ons-splitter-side
        swipeable width="150px" collapse="" side="left"
        :open.sync="openSide"
      >
        <v-ons-page>
          <v-ons-list>
            <v-ons-list-item v-for="page in pages"
              tappable modifier="chevron"
              @click="currentPage = page; openSide = false"
            >
              <div class="center">{{ page }}</div>
            </v-ons-list-item>
          </v-ons-list>
        </v-ons-page>
      </v-ons-splitter-side>

      <v-ons-splitter-content>
        <component :is="currentPage" :toggle-menu="() => openSide = !openSide"></component>
      </v-ons-splitter-content>
    </v-ons-splitter>
  </v-ons-template>
</template>
<script>
  import Settings from '../components/Settings'
  import Help from '../components/Help'
  export default {
    data(){
      return {
        currentPage: 'Settings',
        pages: ['Help', 'Settings'],
        openSide: false
      };
    },
     components: {
       Settings,
       Help,
     },
  };

  </script>
