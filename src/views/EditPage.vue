<!--suppress JSUnusedGlobalSymbols, CssUnusedSymbol -->
<template>
  <div class="app no-select">
    <link rel="stylesheet" href="https://unpkg.com/vue-material@beta/dist/vue-material.css">
    <link rel="stylesheet" href="https://unpkg.com/vue-material@beta/dist/theme/default-dark.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Google+Sans">

    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-theme-dark">
        <div class="md-toolbar-row">
          <md-button class="md-icon-button" @click="showNavigation=true">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title">SacredLumina - Edit</span>
          <div class="md-toolbar-section-end">
            <md-button @click="$router.push('BasePage')" :md-ripple="false">OPEN NEW</md-button>
            <md-button :md-ripple="false">SAVE</md-button>
          </div>
        </div>
      </md-app-toolbar>
    </md-app>

    <md-drawer :md-active.sync="showNavigation" class="md-scrollbar">
      <md-toolbar class="md-transparent title-padding" md-elevation="0">
        <span class="md-title">Heroes</span>
      </md-toolbar>

      <md-list>
        <md-list-item class="hero-label">
          <router-link to="/GladPage" active-class="active" class="md-raised">Gladiator</router-link>
        </md-list-item>
        <md-list-item class="hero-label">
          <router-link to="/SeraPage" active-class="active" class="md-raised">Seraphim</router-link>
        </md-list-item>
        <md-list-item>
          <span class="hero-label">Battle Mage</span>
        </md-list-item>
        <md-list-item>
          <span class="hero-label">Wood Elf</span>
        </md-list-item>
        <md-list-item>
          <span class="hero-label">Dark Elf</span>
        </md-list-item>
        <md-list-item>
          <span class="hero-label">Vampires</span>
        </md-list-item>
        <md-list-item>
          <span class="hero-label">Dwarf</span>
        </md-list-item>
        <md-list-item>
          <span class="hero-label">Daemon</span>
        </md-list-item>
        <md-toolbar class="md-transparent title-padding" md-elevation="0">
          <span class="md-title">Lumina</span>
        </md-toolbar>
        <md-list-item>
          <span class="hero-label">Settings</span>
        </md-list-item>
        <md-list-item>
          <span class="hero-label">About</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <md-content class="current-path-label" v-text="getPath"></md-content>

    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<style>
  .app {
    font-family: 'Roboto Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #303030;
  }

  .active {
    -webkit-text-fill-color: #ff5252;
  }

  .no-select {
    user-select: none;
  }

  .current-path-label {
    padding-top: 3px;
    padding-bottom: 3px;
    text-align-last: left;
    padding-left: 25px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .hero-label {
    padding-left: 15px;
  }

  .title-padding {
    margin: 25px;
  }
</style>

<style scoped>
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

<script>
import router from '../router'

export default {
  data: () => ({
    showNavigation: false
  }),
  methods: {
    openSettings: () => router.push('WaitPage')
  },
  computed: {
    getPath () {
      return this.$store.getters.getDirectoryPath
    }
  }
}
</script>
