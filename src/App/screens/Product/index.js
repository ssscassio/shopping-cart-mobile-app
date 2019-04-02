/**
 * @format
 * @flow
 */
import { createStackNavigator } from 'react-navigation';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

export default createStackNavigator({
  ProductList: {
    screen: ProductList,
  },
  ProductDetails: {
    screen: ProductDetails,
  },
});
