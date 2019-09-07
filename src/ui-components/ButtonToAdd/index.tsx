import React, { Component } from 'react';
import { View, Button, Icon, Fab } from 'native-base';

interface IButtonToAddProps {
  onClick: () => void;
}

const ButtonToAdd:React.FC<IButtonToAddProps> = ({onClick}) => (
      <View style={{ flex: 1 }}>
        <Fab
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={onClick}>
          <Icon name="add" />
        </Fab>
      </View>
);

export default ButtonToAdd;

