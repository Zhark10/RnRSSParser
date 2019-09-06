import * as React from 'react';
import { AsyncStorage, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface IProfileScreenProps {
  navigation: any;
}
interface IProfileScreenState {}

export default class ProfileScreen extends React.Component<IProfileScreenProps, IProfileScreenState> {
  render() {
    return (
      <Container>
        <Text>ProfileScreen</Text>
        <Button title="to Profile" onPress={this._login} />
      </Container>
    );
  }

  _login = () => {
    AsyncStorage.setItem('userToken', 'add_token');
    this.props.navigation.navigate('Home');
  };
}
