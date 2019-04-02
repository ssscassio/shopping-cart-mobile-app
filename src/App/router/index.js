/**
 * @format
 * @flow
 */
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ProductScreen from '../screens/Product';
import CartScreen from '../screens/Cart';
import colors from '../config/colors';

type TabBarIconProps = {
  tintColor: string,
};
const TabBarIconGenerator = name => {
  const TabBarIcon = ({ tintColor }: TabBarIconProps) => (
    <Icon name={name} size={30} color={tintColor} />
  );
  return TabBarIcon;
};

const TabNavigation = createMaterialBottomTabNavigator(
  {
    Product: {
      screen: ProductScreen,
      navigationOptions: {
        title: 'Shopping',
        tabBarIcon: TabBarIconGenerator('store'),
      },
    },
    Cart: {
      screen: CartScreen,
      navigationOptions: {
        title: 'Review your cart',
        tabBarIcon: TabBarIconGenerator('shopping-cart'),
      },
    },
  },
  {
    initialRouteName: 'Product',
    barStyle: {
      backgroundColor: colors.ternary,
    },
    activeColor: colors.backgroundLight,
  }
);

export default createAppContainer(TabNavigation);
