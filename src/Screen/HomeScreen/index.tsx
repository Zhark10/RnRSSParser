import * as React from 'react';
import { AsyncStorage, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import Wrapper from '../ScreenWrapper';
import RSSModal from '../../ui-components/Modal';
import ButtonToAdd from '../../ui-components/ButtonToAdd';
import * as rssParser from 'react-native-rss-parser';

interface IHomeScreenProps {
  navigation: any;
}
interface IHomeScreenState {
  showRSSModal: boolean;
  newsTitle: string;
}

export default class HomeScreen extends React.Component<IHomeScreenProps, IHomeScreenState> {

  state: IHomeScreenState = {
    showRSSModal: false,
    newsTitle: ""
  }

  render() {
    const { showRSSModal, newsTitle } = this.state;
    const { addRSS } = this;
    return (
      <Wrapper>
        <Text>{newsTitle}</Text>
        <ButtonToAdd onClick={() => this.setState({ showRSSModal: true })} />
        <RSSModal modalVisible={showRSSModal} onHide={() => this.setState({ showRSSModal: false })} addRSS={addRSS} />
      </Wrapper>
    );
  }

  private addRSS = () => {
    return fetch('http://www.nasa.gov/rss/dyn/breaking_news.rss')
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
      console.log(rss.title);
      console.log(rss.items.length);
      this.setState({newsTitle: rss.title})
    });
  }

  _login = () => {
    AsyncStorage.setItem('userToken', 'add_token');
    this.props.navigation.navigate('Profile');
  };
}
