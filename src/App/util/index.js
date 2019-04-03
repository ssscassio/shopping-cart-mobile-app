/**
 * @format
 * @flow
 */

export default function(money: number): string {
  return money.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}
