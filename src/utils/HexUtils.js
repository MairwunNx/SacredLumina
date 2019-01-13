/**
 * Return converted decimal number in format 00.
 *
 * @param  {number} value - Value to be converted to hex.
 * @return {string} Converted hexadecimal value.
 *
 * @static
 */
export function decimalToHex (value) {
  let hexNumber = (+value).toString(16).toUpperCase()

  if ((hexNumber.length % 2) > 0) hexNumber = '0' + hexNumber

  return hexNumber
}

/**
 * Return hexadecimal array of file bytes.
 *
 * @param  {string} filePath - Path to need file.
 * @return {Array} hexadecimal array of file bytes.
 *
 * @static
 */
export function getHexadecimalArray (filePath) {
  const fs = require('fs')

  let fileData = fs.readFileSync(filePath).toString('hex')
  let result = []

  for (let i = 0; i < fileData.length; i += 2) {
    result.push('0x' + fileData[i] + '' + fileData[i + 1])
  }

  return result
}
