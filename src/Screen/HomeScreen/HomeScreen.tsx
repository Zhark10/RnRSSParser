import React, { Component } from 'react';
import Wrapper from '../ScreenWrapper/ScreenWrapper';
import RSSModal from '../../ui-components/rss-modal/rss-modal';
import { connect } from 'react-redux';
import { Content, Spinner, Card, CardItem, Body, Text, Toast } from 'native-base';
import { deleteSource, saveSource, deleteAllSources } from '../../redux/modules/rss/action';
import { Reducers } from '../../redux/store/rootReducer';
import { RSSResponse, RSSResponseItem } from '../../redux/modules/rss/types';
import FixedButton from '../../components/buttons/fixed-button/fixed-button';
import { MenuActions } from '../../entities/menu';
import Source from '../../ui-components/source/source';

interface IHomeScreenProps {
  navigation?: any;
  sources?: RSSResponse[];
  dispatch?: Function;
  isLoaded: boolean;
}
interface IHomeScreenState {
  showRSSModal: boolean;
}

class HomeScreen extends Component<IHomeScreenProps, IHomeScreenState> {

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
        this.showMessage("Просто взял и все снес ;(")
        break;
      }
    }
  }

  private addRSS = (rssUrl: string) => {
    const { dispatch, sources } = this.props;
    this.setState({ showRSSModal: false });
    if (this.searchRSSinStore(sources, rssUrl)) {
      this.showMessage("Опять её же? Зачем?")
    } else {
      dispatch(saveSource(rssUrl, () => this.showMessage("Ура! Лента добавлена!")));
    }
  }

  private showMessage = (text: string) => (
    Toast.show({
      text,
      duration: 2000,
      style: { backgroundColor: "#cde1f9" },
      textStyle: { color: "#000" },
      buttonTextStyle: { color: "#000" },
      buttonText: "ОК"
    })
  )

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
              <Source
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
                      Пока загруженных новостных лент нет, но ты можешь добавить ее, нажав на кнопку внизу экрана.
                </Text>
                  </Body>
                </CardItem>
              </Card>
              : <Spinner color="blue" />
          }
        </Content>

        <FixedButton onClick={() => this.setState({ showRSSModal: true })} />
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