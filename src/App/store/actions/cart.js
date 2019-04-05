/**
 * @format
 * @flow
 */
import type { itemType } from '../../flow/types';

export const addOneItem = (item: itemType) => ({
  type: 'ADD_ONE_ITEM',
  item,
});

export const removeOneItem = (item: itemType) => ({
  type: 'REMOVE_ONE_ITEM',
  item,
});

export const removeFromCart = (id: string) => ({
  type: 'REMOVE_FROM_CART',
  id,
});
