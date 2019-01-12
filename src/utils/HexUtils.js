/**
 * Return converted decimal number in format 00.
 *
 * @param  {number} value - Value to be converted to hex.
 * @return {number} Converted hexadecimal value.
 *
 * @static
 */
export function decimalToHex (value) {
  let hexNumber = (+value).toString(16).toUpperCase()

  if ((hexNumber.length % 2) > 0) hexNumber = '0' + hexNumber

  return Number(hexNumber)
}
