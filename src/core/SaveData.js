import store from '../store'
import { putInt32DataInFile } from '../utils/ByteUtils'

/**
 * Save all game heroes positions from data in global store.
 *
 * @static
 */
export function saveData () {
  putInt32DataInFile(store.getters.getDirectoryPath + '\\TYPE_NPC_GLADIATOR\\startcode.bin', 551846, 551851, store.getters.getGladPageXPos, store.getters.getGladPageYPos)
  putInt32DataInFile(store.getters.getDirectoryPath + '\\TYPE_NPC_SERAPHIM\\startcode.bin', 550551, 550556, store.getters.getSeraPageXPos, store.getters.getSeraPageYPos)
}
