/**
 * @format
 * @flow
 */
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import styles from './styles';
import type { BadgePropTypes, TotalPropTypes, HeaderPropTypes } from './types';
import colors from '../../config/colors';
import formatMoney from '../../util';

const IconGenerator = (name: string = 'store', tintColor: string) => (
  <Icon name={name} size={24} color={tintColor} />
);

/**
 * Component to render a Badge that receives a badgeCount
 * and display it inside a rounded container
 *
 * @param {BadgePropTypes} {
 *   badgeCount = 0,
 *   badgeColor = '#fff',
 *   textColor = '#333'
 * }
 */
const Badge = ({ badgeCount = 0, badgeColor = '#fff', textColor = '#333' }: BadgePropTypes) => (
  <View style={{ ...styles.badgeContainer, backgroundColor: badgeColor }}>
    <Text style={{ color: textColor }}>{badgeCount}</Text>
  </View>
);

const Total = ({ price = 0 }: TotalPropTypes) => (
  <Text style={styles.totalText}>{formatMoney(price)}</Text>
);

/**
 * Component to render Button on App header that
 * receives a onPress callback and can display a icon, totalPrice and badge
 *
 * @param {HeaderPropTypes} {
 *   onPress,
 *   iconName,
 *   tintColor = '#fff',
 *   badge = 0,
 *   totalPrice = 0,
 *   showTotal = false,
 * }
 * @returns <HeaderButton />
 */
const HeaderButton = ({
  onPress,
  iconName,
  tintColor = '#fff',
  badge = 0,
  totalPrice = 0,
  showTotal = false,
}: HeaderPropTypes) => (
  <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={() => onPress()}>
    {showTotal && <Total price={totalPrice} />}
    {IconGenerator(iconName, tintColor)}
    {badge !== 0 && <Badge badgeCount={badge} badgeColor={colors.secondary} textColor="#333" />}
  </TouchableOpacity>
);
/** Default Props for HeaderButton */
HeaderButton.defaultProps = {
  badge: 0,
  totalPrice: 0,
  tintColor: '#fff',
  showTotal: false,
};

// Map Redux States to Component Props
const mapStateToProps = (state: Object) => ({
  badge: state.cart.itens_count,
  totalPrice: state.cart.total_price,
});

// Export Stateless Components (To be used on Tests)
export { Badge, Total, HeaderButton };
// Connect component with store and export it as default
export default connect(mapStateToProps)(HeaderButton);
