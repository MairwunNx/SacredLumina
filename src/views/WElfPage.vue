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
          <span class="note-content">You are currently edit hero Wood Elf.</span>
        </md-content>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getXPosData: {
      get: function () {
        return this.$store.getters.getWElfPageXPos
      },
      set: function (newValue) {
        this.$store.dispatch('setWElfPageXPos', newValue)
      }
    },
    getYPosData: {
      get: function () {
        return this.$store.getters.getWElfPageYPos
      },
      set: function (newValue) {
        this.$store.dispatch('setWElfPageYPos', newValue)
      }
    }
  }
}
</script>
