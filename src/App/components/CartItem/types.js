/**
 * Types definition used on CartItem Component
 *
 * @format
 * @flow
 */
import type { itemType } from '../../flow/types';

// PropTypes for CloseButton
export type CloseButtonProps = {
  onPress: () => mixed,
};

// PropTypes for CartItem
export type CartItemProps = {
  item: itemType,
  addOne: (item: itemType) => mixed,
  removeOne: (item: itemType) => mixed,
  removeItem: (id: string) => void,
};
