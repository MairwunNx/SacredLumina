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
 * @return {string} hexadecimal array of file bytes.
 *
 * @static
 */
export function getHexadecimalArray (filePath) {
  const fs = require('fs')

  return fs.readFileSync(filePath, 'hex')
}
