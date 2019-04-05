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

type Props = {
  item: {
    id: string,
    description: string,
    value: number,
    onCart: number,
    available: number,
    picture: string,
    title: string,
  },
};

const ProductItem = (props: Props) => {
  const {
    item: { picture, value, title, onCart },
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.pictureContainer}>
        <Image style={styles.picture} source={{ uri: picture }} />
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.productTitle} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
        <View style={styles.moneyContainer}>
          <Text style={styles.price} numberOfLines={1} ellipsizeMode="tail">
            {formatCurrency(value)}
          </Text>
          <Text style={styles.total} numberOfLines={1} ellipsizeMode="tail">
            <Text style={styles.productTitle}>Total: </Text>
            {formatCurrency(value * onCart)}
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
  );
};

export default ProductItem;
