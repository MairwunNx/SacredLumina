<!--suppress JSUnusedGlobalSymbols, JSIgnoredPromiseFromCall -->
<template>
  <div class="base-content">
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/5.0.0/normalize.css"/>

    <div class="base-content-align">
      <div>
        <span class="md-display-3">Hero Settings</span>
        <md-field>
          <label>x-based-position</label>
          <md-textarea onkeypress='return event.charCode >= 48 && event.charCode <= 57' maxlength="4" v-model="getXPosData" md-autogrow></md-textarea>
        </md-field>

        <md-field>
          <label>y-based-position</label>
          <md-textarea onkeypress='return event.charCode >= 48 && event.charCode <= 57' maxlength="4" v-model="getYPosData" md-autogrow></md-textarea>
        </md-field>

        <md-content class="note">
          <span class="note-content">You are currently edit hero Dwarf.</span>
        </md-content>
      </div>
    </div>
  </div>
</template>

<style>
  .base-content {
    font-family: 'Roboto Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: calc(100vh - 90px);
    display: flex;
  }

  .base-content-align {
    display: flex;
  }

  .note {
    border-left: 4px solid #ff5252;
    padding-top: 6px;
    padding-bottom: 6px;
    text-align: left;
  }

  .note-content {
    padding-left: 20px;
  }
</style>

<script>
export default {
  computed: {
    getXPosData: {
      get: function () {
        return this.$store.getters.getDwarfPageXPos
      },
      set: function (newValue) {
        this.$store.dispatch('setDwarfPageXPos', newValue)
      }
    },
    getYPosData: {
      get: function () {
        return this.$store.getters.getDwarfPageYPos
      },
      set: function (newValue) {
        this.$store.dispatch('setDwarfPageYPos', newValue)
      }
    }
  }
}
</script>
