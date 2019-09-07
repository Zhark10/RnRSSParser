import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';

interface IFabButtonProps {

}

interface IFabButtonState {
    active: boolean
}

export default class FabButton extends Component<IFabButtonProps,IFabButtonState> {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }
  render() {
    return (  
     
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />

            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="add" />
            </Button>

          </Fab>
        </View>

    );
  }
}