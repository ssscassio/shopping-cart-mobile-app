/**
 * @format
 * @flow
 */
import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import type { CloseButtonProps, CartItemProps } from './types';
import { addOneItem, removeOneItem, removeFromCart } from '../../store/actions';
import formatCurrency from '../../util';
import styles from './styles';
import colors from '../../config/colors';

const CloseButton = ({ onPress }: CloseButtonProps) => (
  <TouchableOpacity
    hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
    activeOpacity={0.6}
    onPress={onPress}
    style={styles.closeButton}
  >
    <Icon name="close" size={15} color={colors.backgroundLight} />
  </TouchableOpacity>
);

/**
 * Show a Alert to the user that ask if he really want to remove a item
 *
 * @param {(id: string) => void} removeItem Callback to remove the item
 * @param {string} id The id of the product to be removed from cart
 */
const confirmModal = (removeItem: (id: string) => void, id: string) => {
  Alert.alert('Remove Item', 'Are you sure you want to remove this item?', [
    { text: 'Cancel', style: 'cancel' },
    {
      text: 'OK',
      onPress: () => {
        removeItem(id);
      },
    },
  ]);
};

/**
 * CartItem component that allows user to increase or decrease the quantity
 * of a specific item on it cart
 *
 * @param {CartItemProps} {
 *   item,
 *   addOne,
 *   removeOne,
 *   removeItem,
 * }
 * @returns <CartItem/>
 */
const CartItem = (props: CartItemProps) => {
  const { item, addOne, removeOne, removeItem } = props;
  const {
    item: { picture, price, title, onCart = 0, id },
  } = props;
  return (
    <View style={styles.container}>
      <CloseButton onPress={() => confirmModal(removeItem, id)} />
      <View style={styles.pictureContainer}>
        <Image style={styles.picture} source={{ uri: picture }} />
      </View>
      <View style={styles.leftContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.productTitle} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.middleContainer}>
            <View style={styles.moneyContainer}>
              <Text style={styles.price}>{formatCurrency(price)}</Text>
              <Text style={styles.total}>
                <Text style={styles.productTitle}>Total: </Text>
                {formatCurrency(price * onCart)}
              </Text>
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.quantityButton} onPress={() => addOne(item)}>
              <Icon name="expand-less" size={30} color={colors.buttonColor} />
            </TouchableOpacity>
            <Text style={styles.quantity}>{onCart}</Text>
            <TouchableOpacity
              disabled={onCart === 1}
              style={styles.quantityButton}
              onPress={() => {
                removeOne(item);
              }}
            >
              <Icon name="expand-more" size={30} color={colors.buttonColor} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

// Map Redux Actions Dispatchers to Component Props
const mapDispatchToProps = dispatch => ({
  addOne: item => dispatch(addOneItem(item)),
  removeOne: item => dispatch(removeOneItem(item)),
  removeItem: id => dispatch(removeFromCart(id)),
});

// Export Stateless Components (To be used on Tests)
export { CartItem, CloseButton };

// Connect component with store and export it as default
export default connect(
  null,
  mapDispatchToProps
)(CartItem);
