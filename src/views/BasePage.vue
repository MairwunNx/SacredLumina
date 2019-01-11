<!--suppress JSUnusedGlobalSymbols, JSIgnoredPromiseFromCall -->
<template>
  <div class="app no-select">
    <link rel="stylesheet" href="https://unpkg.com/vue-material@beta/dist/vue-material.css">
    <link rel="stylesheet" href="https://unpkg.com/vue-material@beta/dist/theme/default-dark.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">

    <md-dialog-alert
      :md-active.sync="errorDialog"
      md-title="Error!"
      md-content="Not correct path, please select game bin folder!"/>

    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-theme-dark">
        <div class="md-toolbar-row">
          <span class="md-title app-bar-header-text">SacredLumina</span>
          <div class="md-toolbar-section-end app-bar-header-icon">
            <md-button class="md-icon-button" v-on:click="openRepository">
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

<script>
export default {
  name: 'DialogAlert',
  data: () => ({
    errorDialog: false
  }),

  methods: {
    openRepository () {
      window.open('https://github.com/MairwunNx/SacredLumina', '_blank')
    },

    openDirectory () {
      const { dialog } = require('electron').remote
      let ss = (dialog.showOpenDialog({ properties: ['openFile', 'openDirectory'] }))

      if (ss != null || ss !== undefined) {
        if (ss[0].length !== 0 && ss[0].endsWith('bin')) {
          this.$store.dispatch('setDirectoryPath', ss[0])
        } else {
          this.errorDialog = true
        }
      } else {
        this.errorDialog = true
      }
    }
  }
}
</script>
