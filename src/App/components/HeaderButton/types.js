/**
 * Types definition used on HeaderButton Component
 *
 * @format
 * @flow
 */

// PropTypes for Badge Component
export type BadgePropTypes = {
  badgeCount: number,
  badgeColor: string,
  textColor: string,
};

// PropTypes for Total Component
export type TotalPropTypes = {
  price: number,
};

// Props Types for Header Button
export type HeaderPropTypes = {
  onPress: () => mixed,
  iconName: string,
  tintColor?: string,
  badge?: number,
  totalPrice?: number,
  showTotal?: boolean,
};
