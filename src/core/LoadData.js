import store from '../store'
import { getNumberFromBytes } from '../utils/ByteUtils'

/**
 * Load all game heroes positions and save data in global store.
 *
 * @static
 */
export function loadData () {
  let gladPositions = getNumberFromBytes(
    store.getters.getDirectoryPath + '\\TYPE_NPC_GLADIATOR\\startcode.bin',
    551846, 551851)

  store.dispatch('setGladPageXPos', gladPositions[0])
  store.dispatch('setGladPageYPos', gladPositions[1])

  let seraPositions = getNumberFromBytes(
    store.getters.getDirectoryPath + '\\TYPE_NPC_SERAPHIM\\startcode.bin',
    550551, 550556)

  store.dispatch('setSeraPageXPos', seraPositions[0])
  store.dispatch('setSeraPageYPos', seraPositions[1])
}
