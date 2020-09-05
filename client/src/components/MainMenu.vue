<template>
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <strong>Message Board</strong>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item " href="#">
          Home
        </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MainMenu extends Vue {}
</script>
