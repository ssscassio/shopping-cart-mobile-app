/**
 * @format
 * @flow
 */
import api from '../../services/api';

export const REQUEST_ALL_ITEMS = 'REQUEST_ALL_ITEMS';
export const requestAllItems = () => ({
  type: REQUEST_ALL_ITEMS,
});

export const REQUEST_ITEM = 'REQUEST_ITEM';
export const requestItem = (id: string) => ({
  type: REQUEST_ITEM,
  id,
});

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const receiveAllItems = (data: any) => ({
  type: RECEIVE_ITEMS,
  items: data.allItems,
});

function fetchItems() {
  return dispatch => {
    dispatch(requestAllItems());
    return api.getAllItems().then(json => dispatch(receiveAllItems(json)));
  };
}

function shouldFetchItems(state) {
  const { store } = state;
  if (store.isFetching) {
    return false;
  }
  return true;
}

export function fetchItemsIfNeeded() {
  return (dispatch: mixed => mixed, getState: () => any) => {
    if (shouldFetchItems(getState())) {
      return dispatch(fetchItems());
    }
    return null;
  };
}
