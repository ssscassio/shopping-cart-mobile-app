/**
 * Screen to display details about a specific product
 *
 * @param {ProductDetailsProps} {
 *   item,
 *   addOne,
 *   navigation
 * }
 * @returns <ProductDetails />
 * @format
 * @flow
 */
import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, ScrollView } from 'react-native';
import type { ProductDetailsProps } from './types';
import { addOneItem } from '../../store/actions';
import Button from '../../components/Button';
import colors from '../../config/colors';
import styles from './styles';
import formatPrice from '../../util';

const ProductDetails = (props: ProductDetailsProps) => {
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
            addOne(item);
            navigation.navigate('Cart');
          }}
        />
      </View>
    </View>
  );
};

// Map Redux Actions Dispatchers to Component Props
const mapDispatchToProps = dispatch => ({
  addOne: item => dispatch(addOneItem(item)),
});

// Export Stateless Component not connected to redux store (To be used on Tests)
export { ProductDetails };

// Connect component with store and export it as default
export default connect(
  null,
  mapDispatchToProps
)(ProductDetails);
