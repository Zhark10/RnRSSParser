import React, { Component } from "react";
import { Root } from "native-base";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import AppNavigator from "./src/Screen/Navigation";

interface IAppProps { }
interface IAppState {
  loading: boolean;
}

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
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Root>
        <AppNavigator />
      </Root>
    );
  }
}

export default App;