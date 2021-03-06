import store from '../store'
import { getNumberFromBytes } from '../utils/ByteUtils'
import { sendUseStat } from './SendStat'

/**
 * Load all game heroes positions and save data in global store.
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

  let magePositions = getNumberFromBytes(
    store.getters.getDirectoryPath + '\\TYPE_NPC_MAGICIAN\\startcode.bin',
    550551, 550556)

  store.dispatch('setMagePageXPos', magePositions[0])
  store.dispatch('setMagePageYPos', magePositions[1])

  let WElfPositions = getNumberFromBytes(
    store.getters.getDirectoryPath + '\\TYPE_NPC_ELVE\\startcode.bin',
    550551, 550556)

  store.dispatch('setWElfPageXPos', WElfPositions[0])
  store.dispatch('setWElfPageYPos', WElfPositions[1])

  let DElfPositions = getNumberFromBytes(
    store.getters.getDirectoryPath + '\\TYPE_NPC_DARKELVE\\startcode.bin',
    550551, 550556)

  store.dispatch('setDElfPageXPos', DElfPositions[0])
  store.dispatch('setDElfPageYPos', DElfPositions[1])

  let VampPositions = getNumberFromBytes(
    store.getters.getDirectoryPath + '\\TYPE_NPC_VAMPIRELADY\\startcode.bin',
    550551, 550556)

  store.dispatch('setVampPageXPos', VampPositions[0])
  store.dispatch('setVampPageYPos', VampPositions[1])

  let DwarfPositions = getNumberFromBytes(
    store.getters.getDirectoryPath + '\\TYPE_NPC_ZWERG\\startcode.bin',
    550551, 550556)

  store.dispatch('setDwarfPageXPos', DwarfPositions[0])
  store.dispatch('setDwarfPageYPos', DwarfPositions[1])

  let DemonPositions = getNumberFromBytes(
    store.getters.getDirectoryPath + '\\TYPE_NPC_DAEMONIN\\startcode.bin',
    550551, 550556)

  store.dispatch('setDemonPageXPos', DemonPositions[0])
  store.dispatch('setDemonPageYPos', DemonPositions[1])

  sendUseStat('loaded-datapos')
}
