/**
 * @format
 * @flow
 */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import formatCurrency from '../../util';
import styles from './styles';

type Props = {
  navigate: (item: {
    id: string,
    description: string,
    value: number,
    qtd: number,
    picture: string,
    title: string,
  }) => void,
  item: {
    id: string,
    description: string,
    value: number,
    qtd: number,
    picture: string,
    title: string,
  },
};

const ProductItem = (props: Props) => {
  const { navigate } = props;
  const {
    item: { picture, value, title },
  } = props;
  return (
    <TouchableOpacity onPress={() => navigate(props.item)} style={styles.container}>
      <Image style={styles.picture} source={{ uri: picture }} />
      <View style={styles.rightContainer}>
        <Text style={styles.productTitle}>{title}</Text>
        <Text style={styles.productPrice}>{formatCurrency(value)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
