/**
 * @format
 * @flow
 */
import type { itemType } from '../../flow/types';

export const ADD_ONE_ITEM = 'ADD_ONE_ITEM';
export const addOneItem = (item: itemType) => ({
  type: ADD_ONE_ITEM,
  item,
});

export const REMOVE_ONE_ITEM = 'REMOVE_ONE_ITEM';
export const removeOneItem = (item: itemType) => ({
  type: REMOVE_ONE_ITEM,
  item,
});

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const removeFromCart = (id: string) => ({
  type: REMOVE_FROM_CART,
  id,
});
