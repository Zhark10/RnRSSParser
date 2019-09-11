import React, { FC } from 'react';
import { View, Icon, Fab } from 'native-base';
import style from './style';

interface IFixedButtonProps {
  onClick: () => void;
}

const FixedButton: FC<IFixedButtonProps> = ({ onClick }) => (
  <View >
    <Fab
      direction="up"
      style={style.button}
      position="bottomRight"
      onPress={onClick}>
      <Icon name="add" />
    </Fab>
  </View>
);

export default FixedButton;

