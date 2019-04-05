/**
 * @format
 * @flow
 */
import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import CartItem from '../../components/CartItem';
import styles from './styles';

const keyExtractor = (item: {
  id: string,
  description: string,
  value: number,
  qtd: number,
  available: number,
  picture: string,
  title: string,
}): string => item.id;

type Props = {
  items: Array<{}>,
};
const Cart = ({ items }: Props) => (
  <View style={styles.container}>
    <FlatList
      data={items}
      keyExtractor={keyExtractor}
      renderItem={({ item }) => <CartItem item={item} key={item.id} />}
    />
  </View>
);

const mapStateToProps = state => ({
  items: Object.values(state.cart.items),
});

export default connect(mapStateToProps)(Cart);
