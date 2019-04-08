/**
 * @format
 * @flow
 */
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import logger from 'redux-logger';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import thunkMiddleware from 'redux-thunk';

import AppNavigator from '../router';

import appReducer from './reducers';

// Enable Redux Persist
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2, // Merge state with two-levels deep
};
const persistedReducer = persistReducer(persistConfig, appReducer);

const middleware = createReactNavigationReduxMiddleware(state => state.nav);

const App = createReduxContainer(AppNavigator);

const mapStateToProps = state => ({
  state: state.nav,
});

export const AppWithNavigationState = connect(mapStateToProps)(App);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunkMiddleware, logger, middleware)
);
export const persistedStore = persistStore(store);
