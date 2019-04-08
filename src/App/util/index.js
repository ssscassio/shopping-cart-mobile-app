/**
 * @format
 * @flow
 */

/**
 * Format number to price in Real
 * (Ex:20300.14908 -> R$ 20.300,15)
 *
 * @param {number} money amount of money
 * @returns {string} formatted value in Real
 */
export default function(money: number): string {
  return `R$ ${money
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+,)/g, '$1.')}`;
}
