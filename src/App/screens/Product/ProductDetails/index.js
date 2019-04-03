/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import colors from '../../../config/colors';

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

class ProductDetails extends Component<Props> {
  static navigationOptions = ({ navigation }: Props) => ({
    title: navigation.getParam('item', 'some default value').title, // TODO: Add product name
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.backgroundLight,
  });

  render() {
    const { navigation } = this.props;
    const { title } = navigation.getParam('item', 'some default value');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{title}!</Text>
      </View>
    );
  }
}

export default ProductDetails;
