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
    value: number,
    qtd: number,
    picture: string,
    title: string,
  }) => {
    const { navigation } = this.props;
    navigation.navigate('ProductDetails', { item });
  };

  _keyExtractor = (item: {
    id: string,
    description: string,
    value: number,
    qtd: number,
    picture: string,
    title: string,
  }): string => item.id;

  render() {
    // TODO: Remove all this mock and use GraphQL and Relay to fetch this from api
    const wine = {
      id: 'a',
      description:
        'Análise Sensorial: \n Análise Visual: cor rosa com reflexos alaranjados. Análise Olfativa: Frutas vermelhas (morango) Análise Gustativa: seco, corpo médio, excelente acidez, taninos de boa qualidade, com retro-olfato de frutas.',
      value: 200,
      qtd: 20,
      picture: 'https://cdn.awsli.com.br/600x700/365/365010/produto/13341816/fe9a59131b.jpg',
      title: 'Vinho Nederburg Rosé',
    };
    const products = [
      wine,
      { ...wine, id: 'b' },
      { ...wine, id: 'c' },
      { ...wine, id: 'd' },
      { ...wine, id: 'e' },
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
