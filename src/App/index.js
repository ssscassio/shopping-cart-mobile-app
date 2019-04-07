/**
 * @format
 * @flow
 */
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { AppWithNavigationState, store, persistedStore } from './store';
import AppPlaceholder from './containers/AppPlaceholder';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<AppPlaceholder />} persistor={persistedStore}>
      <AppWithNavigationState />
    </PersistGate>
  </Provider>
);

export default App;
