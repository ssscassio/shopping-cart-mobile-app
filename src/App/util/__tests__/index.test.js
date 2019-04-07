/** @format */

import formatMoney from '..';

test('Format BRL Currency: 2000', () => {
  expect(formatMoney(2000)).toBe('R$ 2.000,00');
});

test('Format BRL Currency: 0', () => {
  expect(formatMoney(0)).toBe('R$ 0,00');
});

test('Format BRL Currency: 20', () => {
  expect(formatMoney(20.0)).toBe('R$ 20,00');
});

test('Format BRL Currency: 20.798', () => {
  expect(formatMoney(20.798)).toBe('R$ 20,80');
});

test('Format BRL Currency: 2000000.798', () => {
  expect(formatMoney(2000000.798)).toBe('R$ 2.000.000,80');
});
