/**
 * @format
 * @flow
 */
import React from 'react';
import { createStackNavigator } from 'react-navigation';

import CartScreen from './screens/Cart';
import ProductList from './screens/ProductList';
import ProductDetails from './screens/ProductDetails';
import colors from './config/colors';

import HeaderButton from './components/HeaderButton';

const sharedNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: colors.backgroundLight,
};

const navigateTo = (navigation, routeName: string) => () => {
  navigation.navigate(routeName);
};

const Navigation = createStackNavigator(
  {
    ProductList: {
      name: 'ProductList',
      screen: ProductList,
      navigationOptions: ({ navigation }) => ({
        ...sharedNavigationOptions,
        title: 'Jusbrasil',
        headerRight: (
          <HeaderButton
            showTotal
            iconName="shopping-cart"
            onPress={navigateTo(navigation, 'Cart')}
          />
        ),
      }),
    },
    ProductDetails: {
      name: 'ProductDetails',
      screen: ProductDetails,
      navigationOptions: ({ navigation }) => ({
        ...sharedNavigationOptions,
        title: navigation.getParam('item', 'some default value').title,
        headerRight: (
          <HeaderButton iconName="shopping-cart" onPress={navigateTo(navigation, 'Cart')} />
        ),
      }),
    },
    Cart: {
      name: 'Cart',
      screen: CartScreen,
      navigationOptions: {
        ...sharedNavigationOptions,
        title: 'My Cart',
      },
    },
  },
  {
    initialRouteName: 'ProductList',
    headerMode: 'float',
  }
);

export default Navigation;
