import * as React from 'react';
import { AsyncStorage, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import FABExample from '../../ui-components/Button';
import Wrapper from '../wrapper';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface IHomeScreenProps {
  navigation: any;
}
interface IHomeScreenState { }

export default class HomeScreen extends React.Component<IHomeScreenProps, IHomeScreenState> {
  render() {
    return (
      <Wrapper>
        <FABExample />
      </Wrapper>
    );
  }

  private addRSS = () => {

  }

  _login = () => {
    AsyncStorage.setItem('userToken', 'add_token');
    this.props.navigation.navigate('Profile');
  };
}
