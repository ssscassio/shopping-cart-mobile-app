/**
 * @format
 * @flow
 */

import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import logger from 'redux-logger';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import AppNavigator from '../router';

// import new redux helpers

import appReducer from './reducers';

const middleware = createReactNavigationReduxMiddleware(state => state.nav);

const App = createReduxContainer(AppNavigator);

const mapStateToProps = state => ({
  state: state.nav,
});

export const AppWithNavigationState = connect(mapStateToProps)(App);

export default createStore(appReducer, applyMiddleware(logger, middleware));
