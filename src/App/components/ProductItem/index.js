/**
 * @format
 * @flow
 */
import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import type { itemType } from '../../flow/types';
import { addOneItem } from '../../store/actions';
import Button from '../Button';
import formatCurrency from '../../util';
import styles from './styles';

type Props = {
  navigate: (item: itemType) => void,
  item: itemType,
  addOne: (item: itemType) => mixed,
};

const ProductItem = (props: Props) => {
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

const mapDispatchToProps = dispatch => ({
  addOne: item => dispatch(addOneItem(item)),
});

export { ProductItem };

export default connect(
  null,
  mapDispatchToProps
)(ProductItem);
