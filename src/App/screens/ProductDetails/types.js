/**
 * Types definition used on ProductDetails screen
 *
 * @format
 * @flow
 */
import { NavigationScreenProps } from 'react-navigation';
import type { itemType } from '../../flow/types';

// PropTypes for ProductDetails screen Component
export type ProductDetailsProps = NavigationScreenProps & {
  addOne: (item: itemType) => mixed,
};
