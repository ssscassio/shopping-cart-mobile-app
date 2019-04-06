/**
 * @format
 * @flow
 */
import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import type { ProductItemProps } from './types';
import { addOneItem } from '../../store/actions';
import Button from '../Button';
import formatCurrency from '../../util';
import styles from './styles';

/**
 * ProductItem component that allows user to add item to Cart
 *
 * @param {ProductItemProps} {
 *   item,
 *   navigate,
 *   addOne
 * }
 * @returns <ProductItem />
 */
const ProductItem = (props: ProductItemProps) => {
  const { navigate, item, addOne } = props;
  const {
    item: { picture, price, title },
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigate(props.item)}
      style={styles.container}
    >
      <Image style={styles.picture} source={{ uri: picture }} />
      <View style={styles.rightContainer}>
        <Text style={styles.productTitle}>{title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>{formatCurrency(price)}</Text>
          <Button
            withIcon
            iconName="add-shopping-cart"
            text="Add to Cart"
            onPress={() => {
              addOne(item);
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Map Redux Actions Dispatchers to Component Props
const mapDispatchToProps = dispatch => ({
  addOne: item => dispatch(addOneItem(item)),
});

// Export Stateless Components (To be used on Tests)
export { ProductItem };

// Connect component with store and export it as default
export default connect(
  null,
  mapDispatchToProps
)(ProductItem);
