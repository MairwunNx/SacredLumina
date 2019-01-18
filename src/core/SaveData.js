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
  putInt32DataInFile(store.getters.getDirectoryPath + '\\TYPE_NPC_MAGICIAN\\startcode.bin', 550551, 550556, store.getters.getMagePageXPos, store.getters.getMagePageYPos)
  putInt32DataInFile(store.getters.getDirectoryPath + '\\TYPE_NPC_ELVE\\startcode.bin', 550551, 550556, store.getters.getWElfPageXPos, store.getters.getWElfPageYPos)
  putInt32DataInFile(store.getters.getDirectoryPath + '\\TYPE_NPC_DARKELVE\\startcode.bin', 550551, 550556, store.getters.getDElfPageXPos, store.getters.getDElfPageYPos)
  putInt32DataInFile(store.getters.getDirectoryPath + '\\TYPE_NPC_VAMPIRELADY\\startcode.bin', 550551, 550556, store.getters.getVampPageXPos, store.getters.getVampPageYPos)
  putInt32DataInFile(store.getters.getDirectoryPath + '\\TYPE_NPC_ZWERG\\startcode.bin', 550551, 550556, store.getters.getDwarfPageXPos, store.getters.getDwarfPageYPos)
  putInt32DataInFile(store.getters.getDirectoryPath + '\\TYPE_NPC_DAEMONIN\\startcode.bin', 550551, 550556, store.getters.getDemonPageXPos, store.getters.getDemonPageYPos)

  require('electron').shell.beep()
}
