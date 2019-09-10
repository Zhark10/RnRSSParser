import React from 'react';
import { View, Icon, Fab } from 'native-base';

interface IFixedButtonProps {
  onClick: () => void;
}

const FixedButton: React.FC<IFixedButtonProps> = ({ onClick }) => (
  <View >
    <Fab
      direction="up"
      containerStyle={{}}
      style={{ backgroundColor: "#5067FF" }}
      position="bottomRight"
      onPress={onClick}>
      <Icon name="add" />
    </Fab>
  </View>
);

export default FixedButton;

