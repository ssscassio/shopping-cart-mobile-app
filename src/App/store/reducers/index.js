/**
 * Combine all reducers
 *
 * @format
 * @flow
 */
import { combineReducers } from 'redux';

import nav from './navigation';
import cart from './cart';
import store from './store';

const reducer = combineReducers({ cart, store, nav });

export default reducer;
