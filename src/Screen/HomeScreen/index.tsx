import * as React from 'react';
import Wrapper, { MenuActions } from '../ScreenWrapper';
import RSSModal from '../../ui-components/Modal';
import ButtonToAdd from '../../components/buttons/ButtonToAdd';
import { connect } from 'react-redux';
import { Content, Spinner, Card, CardItem, Body, Text } from 'native-base';
import { RSSResponse, RSSResponseItem } from '../../redux/modules/rss/reducer';
import { deleteSource, saveSource, deleteAllSources } from '../../redux/modules/rss/action';
import { Reducers } from '../../redux/rootReducer';
import Article from '../../ui-components/Source';
import { Alert } from 'react-native';

interface IHomeScreenProps {
  navigation?: any;
  sources?: RSSResponse[];
  dispatch?: Function;
  isLoaded: boolean;
}
interface IHomeScreenState {
  showRSSModal: boolean;
}

class HomeScreen extends React.Component<IHomeScreenProps, IHomeScreenState> {

  state: IHomeScreenState = {
    showRSSModal: false
  }

  private menuItemClick = (action: MenuActions, index: number) => {
    const { dispatch } = this.props;
    switch (index) {
      case 0: {

        break;
      }
      case 1: {
        dispatch(deleteAllSources());
        break;
      }
    }
  }

  private addRSS = (rssUrl: string) => {
    const { dispatch, sources } = this.props;
    this.setState({ showRSSModal: false });
    if (this.searchRSSinStore(sources, rssUrl)) {
      Alert.alert("Ошибка", "Новостная лента уже добавлена");
    } else {
      dispatch(saveSource(rssUrl));
    }
  }

  private searchRSSinStore = (sources: RSSResponse[], rssUrl: string) => {
    return sources.map((elem: RSSResponse) => elem.id).includes(rssUrl);
  }


  private seeMore = (article: RSSResponseItem) => {
    this.props.navigation.navigate("Profile", { article });
  };

  render() {
    const { showRSSModal } = this.state;
    const { sources, dispatch, isLoaded } = this.props;
    const { addRSS } = this;
    return (
      <Wrapper
        headerTitle="Список лент"
        menuActions={[MenuActions.REFRESH, MenuActions.REMOVE]}
        menuItemClick={this.menuItemClick}
      >
        <Content>
          {
            isLoaded ? (sources && sources.length) ? sources.map((elem: RSSResponse, key: number) => (
              <Article
                key={key}
                id={elem.id}
                title={elem.title}
                imageUrl={elem.imageUrl}
                link={elem.link}
                description={elem.description}
                items={elem.items}
                onDeleteRSS={() => dispatch(deleteSource(elem.title))}
                onArticleClick={this.seeMore}
              />
            )) : <Card transparent>
                <CardItem>
                  <Body>
                    <Text>
                    Новостная лента отсутствует. Вы можете добавить ресурс по RSS адресу, нажав на кнопку добавления.
                </Text>
                  </Body>
                </CardItem>
              </Card>
              : <Spinner color="blue" />
          }
        </Content>

        <ButtonToAdd onClick={() => this.setState({ showRSSModal: true })} />
        <RSSModal modalVisible={showRSSModal} onHide={() => this.setState({ showRSSModal: false })} addRSS={addRSS} />
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ rssReducer }: Reducers): IHomeScreenProps => ({
  sources: rssReducer && rssReducer.sources,
  isLoaded: rssReducer && rssReducer.isLoaded
});

export default connect(mapStateToProps)(HomeScreen);