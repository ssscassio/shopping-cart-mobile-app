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

type CloseButtonProps = {
  onPress: () => mixed,
};
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
      <CloseButton
        onPress={() => {
          /** TODO: */
        }}
      />
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
