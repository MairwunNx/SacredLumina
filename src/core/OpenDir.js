import store from '../store'
import router from '../router'
import { loadData } from '../core/LoadData'
import EditPage from '../views/EditPage'
import BasePage from '../views/BasePage'

export function openDirectory () {
  const { dialog } = require('electron').remote
  let ss = (dialog.showOpenDialog({ properties: ['openFile', 'openDirectory'] }))

  if (ss != null || ss !== undefined) {
    if (ss[0].length !== 0 && ss[0].endsWith('bin')) {
      store.dispatch('setDirectoryPath', ss[0])
      router.push('EditPage')
      EditPage.methods.openSettings()
      loadData()
    } else BasePage.data.errorDialog = true
  } else BasePage.data.notSelectedDialog = true
}
