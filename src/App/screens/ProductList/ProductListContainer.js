/**
 * This component was made to encapsulate the FlatList with a Query Renderer Component
 * this was necessary due issues involving Root routes on StackNavigator and Relay
 *
 * @class ProductListContainer
 * @extends {Component<ProductListProps>}
 */
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { QueryRenderer, graphql } from 'react-relay';
import env from '../../relay/environment';
import ProductItem from '../../components/ProductItem';
import type { ProductListProps } from './types';
import type { itemType } from '../../flow/types';

class ProductListContainer extends Component<ProductListProps> {
  _keyExtractor = (item: itemType): string => item.id;

  render() {
    const { allItems, loading, refreshStore, navigateToDetails } = this.props;
    return (
      <FlatList
        data={allItems}
        refreshing={loading} // Display activity Indicator while refreshing
        onRefresh={refreshStore}
        keyExtractor={this._keyExtractor}
        renderItem={({ item }) => <ProductItem navigate={navigateToDetails} item={item} />}
      />
    );
  }
}

// eslint-disable-next-line react/display-name
export default componentProps => (
  <QueryRenderer
    environment={env} // Here is the environment
    query={query} // And here goes your GraphQL query
    render={({ props }) => <ProductListContainer {...componentProps} {...props} />}
  />
);

const query = graphql`
  query ProductListContainerQuery {
    allItems(first: 10) {
      id
      ...ProductItem_item
    }
  }
`;
