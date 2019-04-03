/**
 * @format
 * @flow
 */

export default function(money: number): string {
  return `R$ ${money
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+,)/g, '$1.')}`;
}
