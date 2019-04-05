/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import type { NavigationScreenProps } from 'react-navigation';

import ProductItem from '../../components/ProductItem';

import styles from './styles';

type Props = NavigationScreenProps & {};

class ProductList extends Component<Props> {
  navigateToDetails = (item: {
    id: string,
    description: string,
    price: number,
    available: number,
    picture: string,
    title: string,
  }) => {
    const { navigation } = this.props;
    navigation.navigate('ProductDetails', { item });
  };

  _keyExtractor = (item: {
    id: string,
    description: string,
    price: number,
    available: number,
    picture: string,
    title: string,
  }): string => item.id;

  render() {
    // TODO: Remove all this mock and use GraphQL and Relay to fetch this from api
    const products = [
      {
        id: '5ca797753fb29c96b0df2a1e',
        picture: 'https://picsum.photos/464/542',
        description:
          'Pariatur velit et voluptate Lorem quis aute aute consectetur. In exercitation fugiat excepteur est officia aliquip ea magna et Lorem non dolore sint. Sunt anim deserunt exercitation Lorem duis non ullamco ullamco commodo irure eu non laboris. In ex amet aliquip voluptate magna aliqua enim cupidatat nulla in ullamco qui amet laboris. Ipsum do quis adipisicing ex anim nisi dolore ullamco sunt. Commodo duis amet proident consequat sunt. Excepteur velit aute veniam eiusmod ullamco nulla nisi.',
        price: 7077,
        title: 'Oulu',
        available: 8,
      },
      {
        id: '5ca79775accda375383b15ff',
        picture: 'https://picsum.photos/591/593',
        description:
          'Qui nulla adipisicing qui est elit veniam sint aute et irure pariatur. Consectetur laboris sint do reprehenderit nostrud minim elit deserunt veniam laborum enim nulla aute cillum. Id commodo labore et id sint culpa velit qui commodo enim ex quis. Cillum ex aute culpa occaecat magna cupidatat mollit enim sint occaecat id dolore irure incididunt.',
        price: 7361,
        title: 'Dancity',
        available: 12,
      },
      {
        id: '5ca797758b8e293a61f9239d',
        picture: 'https://picsum.photos/552/593',
        description:
          'Anim magna quis proident nulla. Excepteur mollit aliqua velit nostrud fugiat dolore laboris est consequat fugiat nisi. Irure incididunt cupidatat velit aute est cillum sunt velit.',
        price: 591,
        title: 'Pharmex',
        available: 10,
      },
      {
        id: '5ca7977534680cf4f1513e23',
        picture: 'https://picsum.photos/421/410',
        description:
          'Tempor tempor esse qui velit tempor. Labore anim minim deserunt reprehenderit sunt consectetur eu consequat dolore laborum occaecat qui dolore ipsum. Consequat pariatur sit voluptate in laborum pariatur magna quis consectetur proident. Aliquip adipisicing nisi irure nisi nulla exercitation fugiat consectetur veniam aute ad velit. Duis ipsum ea ea cupidatat ea in ad id ex laboris. Id duis laborum velit ipsum labore anim officia anim. Dolore duis aliquip sit quis sunt sit cupidatat amet magna dolor pariatur nostrud deserunt.',
        price: 5406,
        title: 'Veraq',
        available: 12,
      },
      {
        id: '5ca7977558e615e1a022d3cb',
        picture: 'https://picsum.photos/488/574',
        description:
          'Voluptate minim sunt non occaecat velit consequat incididunt sint magna qui voluptate minim fugiat. Pariatur mollit cillum deserunt non ipsum mollit ullamco id dolore velit minim nostrud nisi. Excepteur cillum nulla laborum et duis enim sit amet.',
        price: 7074,
        title: 'Atomica',
        available: 11,
      },
      {
        id: '5ca79775ba1088806f57932b',
        picture: 'https://picsum.photos/522/454',
        description:
          'Reprehenderit cillum Lorem sint velit exercitation aute aliquip pariatur. Occaecat culpa ex id proident amet velit aute dolor amet cillum velit deserunt id laboris. Ipsum reprehenderit cillum Lorem non dolore. Occaecat non qui culpa adipisicing in occaecat consectetur. Aliquip quis do nisi non in nostrud.',
        price: 7148,
        title: 'Kidgrease',
        available: 11,
      },
    ];

    return (
      <View style={styles.container}>
        <FlatList
          data={products}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (
            <ProductItem item={item} navigate={this.navigateToDetails} key={item.id} />
          )}
        />
      </View>
    );
  }
}

export default ProductList;
