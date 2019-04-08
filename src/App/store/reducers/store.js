/**
 * Reducers for store state
 *
 * @format
 * @flow
 */
import { REQUEST_ITEMS, RECEIVE_ITEMS, RECEIVE_ITEMS_WITH_OFFSET } from '../actions/store';
import type { itemType } from '../../flow/types';

// Store initial state
const initialState = {
  isFetching: false,
  items: [],
  offset: 0,
};

type stateType = {
  isFetching: boolean,
  items: Array<itemType>,
  offset: number,
};
const store = (
  state: stateType = initialState,
  action: { type: string, items: Array<itemType>, offset: number }
) => {
  switch (action.type) {
    case REQUEST_ITEMS: {
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
    case RECEIVE_ITEMS_WITH_OFFSET: {
      return Object.assign({}, state, {
        isFetching: false,
        items: [...state.items, ...action.items],
      });
    }
    default: {
      return state;
    }
  }
};

export default store;
