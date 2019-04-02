/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import colors from '../../../config/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});

type Props = NavigationScreenProps & {};

class ProductList extends Component<Props> {
  static navigationOptions = () => ({
    title: 'Shopping',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      color: colors.backgroundLight,
    },
  });

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
          <Text style={styles.welcome}>Shopping!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ProductList;
