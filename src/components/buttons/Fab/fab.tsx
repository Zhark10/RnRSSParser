import React, { Component } from 'react';
import { View, Button, Icon, Fab } from 'native-base';
import style from './style';


interface IFabButtonProps { }

interface IFabButtonState {
  active: boolean
}

export default class FabButton extends Component<IFabButtonProps, IFabButtonState> {

  state: IFabButtonState = {
    active: false
  };

  render() {
    return (

      <View style={style.fabContainer}>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={style.fab}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}>
          <Icon name="share" />

          <Button disabled style={style.childrenButton}>
            <Icon name="add" />
          </Button>

        </Fab>
      </View>

    );
  }
}