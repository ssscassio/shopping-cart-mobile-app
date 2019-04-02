/**
 * @format
 * @flow
 */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
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

const Cart = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Cart!</Text>
  </View>
);

export default Cart;
