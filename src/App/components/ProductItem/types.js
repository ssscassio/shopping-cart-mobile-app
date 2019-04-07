/**
 * Types definition used on ProductItem Component
 *
 * @format
 * @flow
 */
import type { itemType } from '../../flow/types';

// PropTypes for ProductItem Component
export type ProductItemProps = {
  navigate: (item: itemType) => void,
  item: itemType,
  addOne: (item: itemType) => mixed,
};
