import { getHexadecimalArray } from './HexUtils'

/**
 * Return converted array of decimal number to array Int32 type with ByteOrder LittleEndian.
 *
 * @param  {string} path - Path to need file.
 * @param  {number} offsetX - decimal byte offsetXPos in file.
 * @param  {number} offsetY - decimal byte offsetYPos in file.
 * @param  {number} length - need data length, default 8 = Int32 type.
 * @return {Array} Converted array of decimal number to Int32 type.
 *
 * @static
 */
export function getNumberFromBytes (path, offsetX, offsetY, length = 8) {
  let byteArray = getHexadecimalArray(path)
  let arrayBufferXPos = new ArrayBuffer(length)
  let dataViewX = new DataView(arrayBufferXPos)

  let arrayBufferYPos = new ArrayBuffer(length)
  let dataViewY = new DataView(arrayBufferYPos)

  for (let i = 0; i < 5; i++) {
    dataViewX.setUint8(i, byteArray[offsetX + i])
  }

  for (let i = 0; i < 5; i++) {
    dataViewY.setUint8(i, byteArray[offsetY + i])
  }

  return [dataViewX.getInt32(0, true), dataViewY.getInt32(0, true)]
}
