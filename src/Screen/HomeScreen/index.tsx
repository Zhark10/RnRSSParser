import * as React from 'react';
import { AsyncStorage, View } from 'react-native';
import Wrapper from '../ScreenWrapper';
import RSSModal from '../../ui-components/Modal';
import ButtonToAdd from '../../ui-components/ButtonToAdd';
import { connect } from 'react-redux';
import { Reducers } from '../../../redux/rootReducer';
import { saveSource } from '../../../redux/rss/action';
import { List, ListItem, Left, Right, Icon, Text } from 'native-base';

interface IHomeScreenProps {
  navigation?: any;
  source?: string[];
  dispatch?: Function;
}
interface IHomeScreenState {
  showRSSModal: boolean;
}

class HomeScreen extends React.Component<IHomeScreenProps, IHomeScreenState> {

  state: IHomeScreenState = {
    showRSSModal: false,
  }

  render() {
    const { showRSSModal } = this.state;
    const { source } = this.props;
    const { addRSS } = this;
    return (
      <Wrapper>
        <List>
          {
            source && source.length ? source.map((elem: string, key: number) => (
              <ListItem key={key} noIndent style={{ backgroundColor: "#cde1f9" }}>
                <Left>
                  <Text>{elem}</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            )) : undefined
          }
        </List>
        <ButtonToAdd onClick={() => this.setState({ showRSSModal: true })} />
        <RSSModal modalVisible={showRSSModal} onHide={() => this.setState({ showRSSModal: false })} addRSS={addRSS} />
      </Wrapper>
    );
  }

  private addRSS = (rssUrl: string) => {
    const { dispatch } = this.props;
    this.setState({ showRSSModal: false });
    dispatch(saveSource(rssUrl));
  }

  _login = () => {
    AsyncStorage.setItem('userToken', 'add_token');
    this.props.navigation.navigate('Profile');
  };
}

const mapStateToProps = ({ rssReducer }: Reducers): IHomeScreenProps => ({ source: rssReducer && rssReducer.source });
export default connect(mapStateToProps)(HomeScreen);
