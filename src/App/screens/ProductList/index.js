/**
 * Component to render the list of items on store
 *
 * @param {ProductListProps} {
 *   navigation,
 *   fetchItems,
 *   products,
 *   loading
 * }
 * @returns <ProductList />
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';
import type { ProductListProps } from 'react-navigation';
import type { itemType } from '../../flow/types';

import { fetchItemsIfNeeded, refreshStoreList } from '../../store/actions';
import ProductItem from '../../components/ProductItem';
import styles from './styles';

class ProductList extends Component<ProductListProps> {
  componentDidMount() {
    const { fetchItems, products } = this.props;
    // Fetch Items from GraphQl API if needed
    if (!products.length) {
      fetchItems();
    }
  }

  navigateToDetails = (item: itemType) => {
    const { navigation } = this.props;
    navigation.navigate('ProductDetails', { item });
  };

  _keyExtractor = (item: itemType): string => item.id;

  render() {
    const { products, loading, fetchItems, refreshStore } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={products}
          refreshing={loading} // Display activity Indicator while fetching
          onRefresh={refreshStore}
          onEndReached={fetchItems} // Fetch items when reached end
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (
            <ProductItem item={item} navigate={this.navigateToDetails} key={item.id} />
          )}
        />
      </View>
    );
  }
}

// Map Redux States to Component Props
const mapStateToProps = state => ({
  products: state.store.items,
  loading: state.store.isFetching,
});

// Map Redux Actions Dispatchers to Component Props
const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItemsIfNeeded()),
  refreshStore: () => dispatch(refreshStoreList()),
});

// Connect component with store and export it as default
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
