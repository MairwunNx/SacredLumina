<!--suppress JSUnusedGlobalSymbols, JSIgnoredPromiseFromCall -->
<template>
  <div class="base-content">
    <div class="base-content-align">
      <div>
        <span class="md-display-3">Hero Settings</span>
        <md-field>
          <label>x-based-position</label>
          <md-textarea onkeypress='return event.charCode >= 48 && event.charCode <= 57' maxlength="4" v-model="getXPosData" required md-autogrow></md-textarea>
        </md-field>

        <md-field>
          <label>y-based-position</label>
          <md-textarea onkeypress='return event.charCode >= 48 && event.charCode <= 57' maxlength="4" v-model="getYPosData" required md-autogrow></md-textarea>
        </md-field>

        <md-content class="note">
          <span class="note-content">You are currently edit hero Gladiator.</span>
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
        return this.$store.getters.getGladPageXPos
      },
      set: function (newValue) {
        this.$store.dispatch('setGladPageXPos', newValue)
      }
    },
    getYPosData: {
      get: function () {
        return this.$store.getters.getGladPageYPos
      },
      set: function (newValue) {
        this.$store.dispatch('setGladPageYPos', newValue)
      }
    }
  }
}
</script>
