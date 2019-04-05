/**
 * @format
 * @flow
 */
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import Button from '../../components/Button';
import colors from '../../config/colors';
import styles from './styles';
import formatPrice from '../../util';

type Props = NavigationScreenProps & {};
const ProductDetails = (props: Props) => {
  const { navigation } = props;
  const { title, picture, description, price } = navigation.getParam('item', 'some default value');
  return (
    <View style={styles.containerWrapper}>
      <ScrollView style={styles.container}>
        <View style={styles.pictureContainer}>
          <View style={styles.pictureWrapper}>
            <Image style={styles.picture} source={{ uri: picture }} />
          </View>
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.contentBox}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.bottomContainer}>
              <Text style={styles.price}>{formatPrice(price)}</Text>
              <Button
                withIcon
                text="Add to Cart"
                onPress={() => {
                  /** TODO: */
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footBar}>
        <Text style={styles.price}>{formatPrice(price)}</Text>
        <Button
          text="Buy Now"
          color={colors.backgroundLight}
          onPress={() => {
            /** TODO: */
          }}
        />
      </View>
    </View>
  );
};

export default ProductDetails;
