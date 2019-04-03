/**
 * @format
 * @flow
 */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});

type Props = NavigationScreenProps & {};

const ProductDetails = (props: Props) => {
  const { navigation } = props;
  const { title } = navigation.getParam('item', 'some default value');
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{title}!</Text>
    </View>
  );
};

export default ProductDetails;
