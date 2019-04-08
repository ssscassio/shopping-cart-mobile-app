/**
 * @format
 * @flow
 */
import api from '../../services/api';

export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const requestItems = () => ({
  type: REQUEST_ITEMS,
});

export const REQUEST_ITEM = 'REQUEST_ITEM';
export const requestItem = (id: string) => ({
  type: REQUEST_ITEM,
  id,
});

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const receiveItems = (data: any) => ({
  type: RECEIVE_ITEMS,
  items: data.allItems,
});

export const RECEIVE_ITEMS_WITH_OFFSET = 'RECEIVE_ITEMS_WITH_OFFSET';
export const receiveItemsWithOffset = (data: any) => ({
  type: RECEIVE_ITEMS_WITH_OFFSET,
  items: data.allItems,
});

function shouldFetchItems(state) {
  const { store } = state;
  if (store.isFetching) {
    return false;
  }
  return true;
}

export function fetchItemsPage() {
  return (dispatch: mixed => mixed, getState: () => any) => {
    const offset = getState().store.items.length;
    dispatch(requestItems());
    return api.getItemsWithOffset(offset).then(json => dispatch(receiveItemsWithOffset(json)));
  };
}

export function fetchItemsIfNeeded() {
  return (dispatch: mixed => mixed, getState: () => any) => {
    if (shouldFetchItems(getState())) {
      return dispatch(fetchItemsPage());
    }
    return null;
  };
}

export function refreshStoreList() {
  return (dispatch: mixed => mixed) => {
    dispatch(requestItems());
    return api.getItemsWithOffset(0).then(json => dispatch(receiveItems(json)));
  };
}
