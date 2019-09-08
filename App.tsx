import React, { Component } from "react";
import { Provider } from 'react-redux'
import Main from "./Main";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider >
    )
  }
}

export default App;


