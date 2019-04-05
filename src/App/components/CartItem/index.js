/**
 * @format
 * @flow
 */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import formatCurrency from '../../util';
import styles from './styles';
import colors from '../../config/colors';

// TODO: const CloseButton = () => {};

type Props = {
  item: {
    id: string,
    description: string,
    price: number,
    onCart: number,
    available: number,
    picture: string,
    title: string,
  },
};

const ProductItem = (props: Props) => {
  const {
    item: { picture, price, title, onCart },
  } = props;
  return (
    <View style={styles.container}>
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
            <TouchableOpacity style={styles.quantityButton}>
              <Icon name="expand-less" size={30} color={colors.buttonColor} />
            </TouchableOpacity>
            <Text style={styles.quantity}>{onCart}</Text>
            <TouchableOpacity style={styles.quantityButton}>
              <Icon name="expand-more" size={30} color={colors.buttonColor} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
