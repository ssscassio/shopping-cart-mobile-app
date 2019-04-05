/**
 * @format
 * @flow
 */
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import styles from './styles';
import colors from '../../config/colors';
import formatMoney from '../../util';

const IconGenerator = (name: string = 'store', tintColor: string = '#fff') => (
  <Icon name={name} size={24} color={tintColor} />
);

type badgePropTypes = {
  badgeCount: number,
  badgeColor: string,
  textColor: string,
};
const Badge = ({ badgeCount = 0, badgeColor = '#fff', textColor = '#333' }: badgePropTypes) => (
  <View style={{ ...styles.badgeContainer, backgroundColor: badgeColor }}>
    <Text style={{ color: textColor }}>{badgeCount}</Text>
  </View>
);

type totalPropTypes = {
  price: number,
};
const Total = ({ price = 0 }: totalPropTypes) => (
  <Text style={styles.totalText}>{formatMoney(price)}</Text>
);

type HeaderPropTypes = {
  onPress: () => mixed,
  iconName: string,
  tintColor: string,
  badge: number,
  totalPrice: number,
  showTotal: boolean,
};

const HeaderButton = (props: HeaderPropTypes) => {
  const { onPress, iconName, tintColor, badge, totalPrice, showTotal } = props;
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={() => onPress()}>
      {showTotal && <Total price={totalPrice} />}
      {IconGenerator(iconName, tintColor)}
      {badge !== 0 && <Badge badgeCount={badge} badgeColor={colors.secondary} textColor="#333" />}
    </TouchableOpacity>
  );
};

const mapStateToProps = state => ({
  badge: state.cart.itens_count,
  totalPrice: state.cart.total_price,
});

export { Badge, Total, HeaderButton };
export default connect(mapStateToProps)(HeaderButton);
