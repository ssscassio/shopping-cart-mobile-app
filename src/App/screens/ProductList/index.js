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
import { View } from 'react-native';
import type { ProductListProps } from './types';
import type { itemType } from '../../flow/types';

import { fetchItemsIfNeeded, refreshStoreList } from '../../store/actions';
import ProductListContainer from './ProductListContainer';
import styles from './styles';

class ProductList extends Component<ProductListProps> {
  navigateToDetails = (item: itemType) => {
    const { navigation } = this.props;
    navigation.navigate('ProductDetails', { item });
  };

  render() {
    const { loading, fetchItems, refreshStore } = this.props;
    return (
      <View style={styles.container}>
        <ProductListContainer
          fetchItems={fetchItems}
          loading={loading}
          refreshStore={refreshStore}
          navigateToDetails={this.navigateToDetails}
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
