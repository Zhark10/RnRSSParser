import React, { Component } from "react";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import { View } from 'native-base';
import { ActivityIndicator } from 'react-native';
import RootComponent from './RootComponent';

class App extends Component {
  render() {
    const renderLoading: React.ReactNode = <View><ActivityIndicator size="large" /></View>;
    return (
      <Provider store={store}>
        <PersistGate loading={renderLoading} persistor={persistor}>
          <RootComponent />
        </PersistGate>
      </Provider >
    )
  }
}

export default App;