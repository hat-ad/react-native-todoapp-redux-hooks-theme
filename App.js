import 'react-native-gesture-handler';
import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/store';
import Router from './Router';

export default function App() {
  return (
    <StoreProvider store={store}>
      <Router />
    </StoreProvider>
  );
}
