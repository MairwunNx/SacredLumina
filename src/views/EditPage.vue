<!--suppress JSUnusedGlobalSymbols, CssUnusedSymbol -->
<template>
  <div class="app no-select">
    <link rel="stylesheet" href="https://unpkg.com/vue-material/dist/vue-material.css">
    <link rel="stylesheet" href="https://unpkg.com/vue-material/dist/theme/default-dark.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono">

    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-theme-dark">
        <div class="md-toolbar-row">
          <md-button class="md-icon-button" @click="showNavigation=true">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title">SacredLumina - Edit</span>
          <div class="md-toolbar-section-end">
            <md-button @click="$router.push('BasePage')">OPEN NEW</md-button>
            <md-button @click="save" v-hotkey="keymap">SAVE</md-button>
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
          <router-link to="/GladPage" active-class="active">Gladiator</router-link>
        </md-list-item>
        <md-list-item class="hero-label">
          <router-link to="/SeraPage" active-class="active">Seraphim</router-link>
        </md-list-item>
        <md-list-item class="hero-label">
          <router-link to="/MagePage" active-class="active">Battle Mage</router-link>
        </md-list-item>
        <md-list-item class="hero-label">
          <router-link to="/WElfPage" active-class="active">Wood Elf</router-link>
        </md-list-item>
        <md-list-item class="hero-label">
          <router-link to="/DElfPage" active-class="active">Dark Elf</router-link>
        </md-list-item>
        <md-list-item class="hero-label">
          <router-link to="/VampPage" active-class="active">Vampiress</router-link>
        </md-list-item>
        <md-list-item class="hero-label">
          <router-link to="/DwarfPage" active-class="active">Dwarf</router-link>
        </md-list-item>
        <md-list-item class="hero-label">
          <router-link to="/DemonPage" active-class="active">Daemon</router-link>
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
import { saveData } from '../core/SaveData'
import { sendUseStat } from '../core/SendStat'

export default {
  data: () => ({
    showNavigation: false
  }),
  methods: {
    openSettings () {
      router.push('WaitPage')
    },
    save () {
      saveData()
      sendUseStat('save-data')
    }
  },
  computed: {
    getPath () {
      return this.$store.getters.getDirectoryPath
    },
    keymap () {
      return {
        'ctrl+s' () {
          saveData()
          sendUseStat('save-data-hot')
        },
        'ctrl+n' () {
          router.push('BasePage')
          sendUseStat('open-again-hot')
        }
      }
    }
  }
}
</script>
