import React, { Component } from "react";
import { Root } from "native-base";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import AppNavigator from "./src/Screen/Navigation";
import { Provider } from 'react-redux'
import { createStore } from "redux";
import { rootReducer } from "./redux/rootReducer";

interface IAppProps { }
interface IAppState {
  loading: boolean;
}

const store = createStore(rootReducer)

class App extends Component<IAppProps, IAppState> {

  state: IAppState = { loading: true };

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Root><AppLoading /></Root>
    } else {
      return <Root>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </Root>
    }
  }
}

export default App;