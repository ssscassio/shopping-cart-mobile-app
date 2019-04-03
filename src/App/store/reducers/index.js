/**
 * @format
 * @flow
 */
import { combineReducers } from 'redux';

import nav from './navigation';
import cart from './cart';

const reducer = combineReducers({ cart, nav });

export default reducer;
