import React, { Component } from "react";
import { Root } from "native-base";
import * as Font from "expo-font";
import AppNavigator from "./Screen/Navigation";

interface IRootComponentProps { }
interface IRootComponentState {
  isLoaded: boolean;
}

class RootComponent extends Component<IRootComponentProps, IRootComponentState> {

  state: IRootComponentState = { isLoaded: false };

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ isLoaded: true });
  }

  render() {
    return (
      this.state.isLoaded &&
      <Root>
        <AppNavigator />
      </Root>
    )
  }
}

export default RootComponent;