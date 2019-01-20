import { getHexadecimalArray, decimalToHex } from './HexUtils'

/**
 * Return converted array of decimal number to array Int32 type with ByteOrder LittleEndian.
 *
 * @param  {string} path - Path to need file.
 * @param  {number} offsetX - decimal byte offsetXPos in file.
 * @param  {number} offsetY - decimal byte offsetYPos in file.
 * @param  {number} length - need data length, default 8 = Int32 type.
 * @return {Array} Converted array of decimal number to Int32 type.
 */
export function getNumberFromBytes (path, offsetX, offsetY, length = 8) {
  let byteArray = getHexadecimalArray(path)
  let arrayBufferXPos = new ArrayBuffer(length)
  let arrayBufferYPos = new ArrayBuffer(length)
  let dataViewX = new DataView(arrayBufferXPos)
  let dataViewY = new DataView(arrayBufferYPos)

  for (let i = 0; i < 5; i++) {
    dataViewX.setUint8(i, '0x' + byteArray[(offsetX + i) * 2] + '' + byteArray[(offsetX + i) * 2 + 1])
  }

  for (let i = 0; i < 5; i++) {
    dataViewY.setUint8(i, '0x' + byteArray[(offsetY + i) * 2] + '' + byteArray[(offsetY + i) * 2 + 1])
  }

  return [dataViewX.getInt32(0, true), dataViewY.getInt32(0, true)]
}

/**
 * Set Int32 data in file with offsets with saving old file data, with LittleEndian byte order.
 *
 * @param  {string} path - Path to need file.
 * @param  {number} offsetX - decimal byte offsetXPos in file.
 * @param  {number} offsetY - decimal byte offsetYPos in file.
 * @param  {number} posX - current hero X position.
 * @param  {number} posY - current hero Y position.
 */
export function putInt32DataInFile (path, offsetX, offsetY, posX, posY) {
  const fs = require('fs')

  let dataXPos = decimalToHex(posX)
  let dataYPos = decimalToHex(posY)

  let dataArrX = []
  let dataArrY = []

  for (let i = 0; i < dataXPos.length; i += 2) {
    dataArrX.push('0x' + dataXPos.slice(i, i + 2))
  }

  for (let i = 0; i < dataYPos.length; i += 2) {
    dataArrY.push('0x' + dataYPos.slice(i, i + 2))
  }

  let fileData = fs.readFileSync(path)
  let dataXPosLittleEndianArray = [ dataArrX[1], dataArrX[0] ]
  let dataYPosLittleEndianArray = [ dataArrY[1], dataArrY[0] ]

  if (dataXPosLittleEndianArray[0] === undefined) {
    fileData[offsetX] = dataXPosLittleEndianArray[1]
    fileData[offsetX + 1] = 0x00
  } else {
    fileData[offsetX] = dataXPosLittleEndianArray[0]
    fileData[offsetX + 1] = dataXPosLittleEndianArray[1]
  }

  if (dataYPosLittleEndianArray[0] === undefined) {
    fileData[offsetY] = dataYPosLittleEndianArray[1]
    fileData[offsetY + 1] = 0x00
  } else {
    fileData[offsetY] = dataYPosLittleEndianArray[0]
    fileData[offsetY + 1] = dataYPosLittleEndianArray[1]
  }

  fs.writeFileSync(path, fileData)
}
