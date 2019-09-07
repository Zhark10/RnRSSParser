import * as React from 'react';
import { AsyncStorage, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import Wrapper from '../ScreenWrapper';
import RSSModal from '../../ui-components/Modal';
import ButtonToAdd from '../../ui-components/ButtonToAdd';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface IHomeScreenProps {
  navigation: any;
}
interface IHomeScreenState {
  showRSSModal: boolean;
}

export default class HomeScreen extends React.Component<IHomeScreenProps, IHomeScreenState> {

  state: IHomeScreenState = {
    showRSSModal: false
  }

  render() {
    const {showRSSModal} = this.state;
    return (
      <Wrapper>
        <ButtonToAdd onClick={() => this.setState({ showRSSModal: true })} />
        <RSSModal modalVisible={showRSSModal} onHide={() => this.setState({ showRSSModal: false })}/>
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
