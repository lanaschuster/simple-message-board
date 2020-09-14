<template>
  <nav class="navbar is-black">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <strong class="logo">Live a Message</strong>
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MainMenu extends Vue {}
</script>
<style>
.logo {
  font-family: 'Rock Salt', cursive;
}
</style>