<template>
  <div id="app">
    <main-menu />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainMenu from './components/MainMenu.vue'

@Component({
  components: {
    MainMenu
  }
})
export default class App extends Vue {}
</script>

<style>
</style>
