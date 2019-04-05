/**
 * @format
 * @flow
 */
import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, ScrollView } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import type { itemType } from '../../flow/types';
import { addOneItem } from '../../store/actions';
import Button from '../../components/Button';
import colors from '../../config/colors';
import styles from './styles';
import formatPrice from '../../util';

type Props = NavigationScreenProps & {
  addOne: (item: itemType) => mixed,
};
const ProductDetails = (props: Props) => {
  const { navigation, addOne } = props;
  const item = navigation.getParam('item', 'some default value');
  const { title, picture, description, price } = item;
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
              <Button withIcon text="Add to Cart" onPress={() => addOne(item)} />
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
            addOneItem(item);
            navigation.navigate('Cart');
          }}
        />
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  addOne: item => dispatch(addOneItem(item)),
});

export { ProductDetails };

export default connect(
  null,
  mapDispatchToProps
)(ProductDetails);
