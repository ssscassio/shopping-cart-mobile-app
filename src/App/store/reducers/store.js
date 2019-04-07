import { REQUEST_ALL_ITEMS, RECEIVE_ITEMS } from '../actions/store';

// Store initial state
const initialState = {
  isFetching: false,
  items: [],
};

const store = (state = initialState, action) => {
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
