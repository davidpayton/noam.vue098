<template>
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
  </template>
  <script>
  import test1 from '../components/test1'
  import test2 from '../components/test2'
  export default {
    data(){
      return {
        currentPage: 'test1',
        pages: ['test1', 'test2'],
        openSide: false
      };
    },
     components: {
       test1,
       test2,
     },
  };

  </script>
