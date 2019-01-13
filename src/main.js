import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueHotkey from 'v-hotkey'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import store from './store'

Vue.use(VueHotkey)
Vue.use(VueMaterial)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.push('BasePage')
