/**
 * @format
 * @flow
 */
import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import type { CartPropTypes } from './types';
import CartItem from '../../components/CartItem';
import Button from '../../components/Button';
import formatPrice from '../../util';
import colors from '../../config/colors';
import styles from './styles';

const keyExtractor = (item: {
  id: string,
  description: string,
  price: number,
  qtd: number,
  available: number,
  picture: string,
  title: string,
}): string => item.id;

const renderFooter = (total: number, itemsCount: number) => (
  <View style={styles.footBar}>
    <View style={styles.previewContainer}>
      <Text style={styles.itemsCount}>
        ({itemsCount} {itemsCount === 1 ? 'item' : 'items'})
      </Text>
      <Text style={styles.totalContainer}>
        Total: <Text style={styles.total}>{formatPrice(total)}</Text>
      </Text>
    </View>
    <Button text="Checkout" disabled color={colors.backgroundLight} onPress={() => {}} />
  </View>
);

const renderEmpty = () => (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyText}>Your Cart is Empty!</Text>
  </View>
);

/**
 * Component to render the list of items already
 * on user cart
 *
 * @param {CartPropTypes} {
 *   items,
 *   itemsCount,
 *   total
 * }
 * @returns <Cart />
 */
const Cart = ({ items, itemsCount, total }: CartPropTypes) => (
  <View style={styles.container}>
    {items.length ? (
      <FlatList
        data={items}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => <CartItem item={item} key={item.id} />}
      />
    ) : (
      renderEmpty()
    )}
    {renderFooter(total, itemsCount)}
  </View>
);

// Map Redux States to Component Props
const mapStateToProps = state => ({
  items: Object.values(state.cart.items),
  itemsCount: state.cart.itens_count,
  total: state.cart.total_price,
});

// Export Stateless Component not connected to redux store (To be used on Tests)
export { Cart };
// Connect component with store and export it as default
export default connect(mapStateToProps)(Cart);
