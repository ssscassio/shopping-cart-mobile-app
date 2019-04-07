/**
 * Reducers for store state
 *
 * @format
 * @flow
 */
import { REQUEST_ALL_ITEMS, RECEIVE_ITEMS } from '../actions/store';
import type { itemType } from '../../flow/types';

// Store initial state
const initialState = {
  isFetching: false,
  items: [],
};

type stateType = {
  isFetching: boolean,
  items: Array<itemType>,
};
const store = (
  state: stateType = initialState,
  action: { type: string, items: Array<itemType> }
) => {
  switch (action.type) {
    case REQUEST_ALL_ITEMS: {
      return Object.assign({}, state, {
        isFetching: true,
      });
    }
    case RECEIVE_ITEMS: {
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
      });
    }
    default: {
      return state;
    }
  }
};

export default store;
