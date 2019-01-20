<!--suppress JSUnusedGlobalSymbols, JSIgnoredPromiseFromCall -->
<template>
  <div class="app no-select">
    <link rel="stylesheet" href="https://unpkg.com/vue-material/dist/vue-material.css">
    <link rel="stylesheet" href="https://unpkg.com/vue-material/dist/theme/default-dark.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">

    <md-dialog-alert
      class="dialog-font"
      :md-active.sync="errorDialog"
      md-title="Error Validating"
      md-content="Not correct path, please select game bin folder"/>

    <md-dialog-alert
      class="dialog-font"
      :md-active.sync="notSelectedDialog"
      md-title="Error Validating"
      md-content="Please, select path with game bin folder"/>

    <md-dialog
      class="dialog-font"
      :md-active.sync="aboutDialog"
      md-title="SacredLumina">
      <md-dialog-title>SacredLumina</md-dialog-title>
      <span class="md-subheading about-dialog-content">Utility for Sacred Underworld</span>
      <p class="about-dialog-content">SacredLumina is simple, easy, the project was made according to the interest of the author and does not bring any benefit to other people, except for fun. The utility is able to edit the starting positions of game characters.</p>
      <p class="about-dialog-content">Project founder: <a class="about-dialog-content-link" v-on:click="openBrowserLink('https://github.com/MairwunNx')">@MairwunNx</a></p>
      <p class="about-dialog-content">Project version: v1.0.0.0.220119.R1 (SacredLumina-1.0.0.0-220119-release-1-official)</p>
      <p class="about-dialog-content">Repository Creation data: 2019-01-11T08:56:54Z</p>
      <p class="about-dialog-content">Say thanks: <a class="about-dialog-content-link" @click="openBrowserLink('mailto:MairwunNx@gmail.com')">MairwunNx@gmail.com</a> or donate <a class="about-dialog-content-link" @click="openBrowserLink('https://qiwi.me/mairwunnx')">qiwi</a> and <a class="about-dialog-content-link" @click="openBrowserLink('https://money.yandex.ru/to/410015993365458')">y.money</a></p>
      <p class="about-dialog-content">Licensed under <a class="about-dialog-content-link" @click="openBrowserLink('https://github.com/MairwunNx/SacredLumina/blob/master/LICENSE')">Apache 2.0</a>, sources available on <a class="about-dialog-content-link" @click="openBrowserLink('https://github.com/MairwunNx/SacredLumina')">github</a>.</p>
    </md-dialog>

    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-theme-dark">
        <div class="md-toolbar-row">
          <span class="md-title app-bar-header-text">SacredLumina</span>
          <div class="md-toolbar-section-end app-bar-header-icon">
            <md-button class="md-icon-button" v-hotkey="keymap" v-on:click="openBrowserLink('https://github.com/MairwunNx/SacredLumina')">
              <i class="md-icon md-icon-image icon-github md-theme-dark">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                  <path
                    d="M512 0C229.25 0 0 229.25 0 512c0 226.25 146.69 418.13 350.16 485.81 25.59 4.69 34.94-11.12 34.94-24.62 0-12.19-.47-52.56-.72-95.31C242 908.81 211.91 817.5 211.91 817.5c-23.31-59.12-56.84-74.87-56.84-74.87-46.53-31.75 3.53-31.12 3.53-31.12 51.41 3.56 78.47 52.75 78.47 52.75 45.69 78.25 119.88 55.63 149 42.5 4.65-33 17.9-55.62 32.5-68.37-113.66-12.95-233.23-56.89-233.23-253.08 0-55.94 19.97-101.56 52.66-137.41-5.22-13-22.84-65.09 5.06-135.56 0 0 42.94-13.75 140.81 52.5 40.81-11.41 84.59-17.03 128.13-17.22 43.5.19 87.31 5.88 128.19 17.28 97.69-66.31 140.69-52.5 140.69-52.5 28 70.53 10.38 122.56 5.13 135.5 32.81 35.84 52.63 81.47 52.63 137.41 0 196.69-119.75 240-233.81 252.69 18.44 15.88 34.75 47 34.75 94.75 0 68.44-.69 123.63-.69 140.5 0 13.63 9.31 29.56 35.25 24.56C877.44 930 1024 738.13 1024 512 1024 229.25 794.75 0 512 0z"></path>
                </svg>
              </i>
            </md-button>
          </div>
        </div>
      </md-app-toolbar>
    </md-app>

    <div class="base-content-align">
      <div>
        <div>
          <h1 class="base-content-head">SacredLumina</h1>
          <p class="base-content-description">Edit heroes start positions with SacredLumina project</p>
          <p class="base-content-small-description">For start just click on "open directory" button. with fun.</p>
        </div>
        <div class="base-content-link">
          <a v-on:click="openDirectory()">
            Open Sacred Underworld bin directory
          </a>
        </div>
      </div>
    </div>
    <div class="about-div">
      <a class="about-div-link" v-on:click="aboutDialog = true">About</a>
    </div>
  </div>
</template>

<style>
  .app {
    font-family: 'Roboto Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #303030;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    text-align: center;
  }

  .about-div {
    background-color: #212121;
    bottom: 0;
    display: table;
    height: 30px;
    position: fixed;
    text-align: center;
    width: 100px;
  }

  .about-div-link {
    cursor: pointer;
    display: table-cell;
    vertical-align: middle;
  }

  .about-dialog-content {
    padding: 0 24px 0;
  }

  .about-dialog-content-link {
    cursor: pointer;
  }

  .dialog-font {
    font-family: 'Roboto Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .base-content-head {
    font-size: 50px;
    padding: 20px;
  }

  .base-content-description {
    font-size: 18px;
  }

  .base-content-small-description {
    font-size: 14px;
  }

  .base-content-link {
    font-size: 18px;
    padding: 20px;
    cursor: pointer;
  }

  .app-bar-header-text {
    padding: 0 140px;
  }

  .app-bar-header-icon {
    padding: 0 140px 0;
  }

  .base-content-align {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .no-select {
    user-select: none;
  }
</style>

<style lang="scss" scoped>
  .md-dialog {
    max-width: 768px;
  }
</style>

<script>
import EditPage from './EditPage'
import { loadData } from '../core/LoadData'
import { getLatest } from '../utils/UpdateUtils'

const electron = require('electron')
export default {
  name: 'DialogAlert',
  data: () => ({
    errorDialog: false,
    notSelectedDialog: false,
    aboutDialog: false
  }),
  mounted: function () {
    console.info(this.$store.getters.getInitialized)
    if (!this.$store.getters.getInitialized) {
      getLatest()
      this.$store.dispatch('setInitialized', true)
    }
  },
  methods: {
    openDirectory () {
      const { dialog } = require('electron').remote
      let ss = (dialog.showOpenDialog({ properties: ['openFile', 'openDirectory'] }))

      if (ss != null || ss !== undefined) {
        if (ss[0].length !== 0 && ss[0].endsWith('bin')) {
          this.$store.dispatch('setDirectoryPath', ss[0])
          this.$router.push('EditPage')
          EditPage.methods.openSettings()
          loadData()
        } else this.errorDialog = true
      } else this.notSelectedDialog = true
    },
    openBrowserLink (url) {
      electron.shell.openExternal(url)
    }
  },
  computed: {
    keymap () {
      return {
        'ctrl+g': this.openRepository,
        'ctrl+n': this.openDirectory
      }
    }
  }
}
</script>
