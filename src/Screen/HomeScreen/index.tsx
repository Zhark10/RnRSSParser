import * as React from 'react';
import { AsyncStorage, Text } from 'react-native';
import Wrapper from '../ScreenWrapper';
import RSSModal from '../../ui-components/Modal';
import ButtonToAdd from '../../ui-components/ButtonToAdd';
import * as rssParser from "react-native-rss-parser";

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

  private addRSS = (rssUrl: string) => {
    this.setState({ showRSSModal: false });
    try {
      fetch(rssUrl)
        .then((response) => response.text())
        .then((responseData) => rssParser.parse(responseData))
        .then((rss) => {
          this.setState({ newsTitle: rss.title })
        });
    } catch (e) {
      alert("Некорректный адрес");
    }
  }

  _login = () => {
    AsyncStorage.setItem('userToken', 'add_token');
    this.props.navigation.navigate('Profile');
  };
}
