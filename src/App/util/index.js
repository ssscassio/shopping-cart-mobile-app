/**
 * @format
 * @flow
 */

export default function(money: number): string {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRl',
    minimumFractionDigits: 2,
  })
    .format(money)
    .replace(String.fromCharCode(160), ' ');
}
