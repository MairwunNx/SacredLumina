import { getHexadecimalArray } from './HexUtils'

/**
 * Return converted decimal number to Int32 type with ByteOrder LittleEndian.
 *
 * @param  {string} path - Path to need file.
 * @param  {number} offset - decimal byte offset in file.
 * @param  {number} length - need data length, default 8 = Int32 type.
 * @return {number} Converted decimal number to Int32 type.
 *
 * @static
 */
export function getNumberFromBytes (path, offset, length = 8) {
  let byteArray = getHexadecimalArray(path)
  let arrayBuffer = new ArrayBuffer(length)
  let dataView = new DataView(arrayBuffer)

  for (let i = 0; i < 5; i++) {
    dataView.setUint8(i, byteArray[offset + i])
  }

  return dataView.getInt32(0, true)
}
