/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';
import type { NavigationScreenProps } from 'react-navigation';

import { fetchItemsIfNeeded } from '../../store/actions';
import ProductItem from '../../components/ProductItem';
import styles from './styles';

type Props = NavigationScreenProps & {};

class ProductList extends Component<Props> {
  componentDidMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }

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
    const { products, loading, fetchItems } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={products}
          refreshing={loading}
          onRefresh={fetchItems}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (
            <ProductItem item={item} navigate={this.navigateToDetails} key={item.id} />
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  products: state.store.items,
  loading: state.store.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItemsIfNeeded()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
