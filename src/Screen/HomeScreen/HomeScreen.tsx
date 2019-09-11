import React, { Component } from 'react';
import Wrapper from '../ScreenWrapper/ScreenWrapper';
import RSSModal from '../../ui-components/rss-modal/rss-modal';
import { connect } from 'react-redux';
import { Content, Spinner, Card, CardItem, Body, Text } from 'native-base';
import { deleteSource, saveSource, deleteAllSources } from '../../redux/modules/rss/action';
import { Reducers } from '../../redux/store/root-reducer';
import { RSSResponse } from '../../redux/modules/rss/types';
import FixedButton from '../../components/buttons/fixed-button/fixed-button';
import { HomeMenuActions } from '../../entities/menu';
import Source from '../../ui-components/source/source';
import { Articles } from '../../redux/modules/articles/types';
import style from './style';
import { showMessage } from '../../utils/helpers';

interface IHomeScreenProps {
  navigation?: any;
  sources?: RSSResponse[];
  dispatch?: Function;
  isLoaded: boolean;
  articles: Articles;
}
interface IHomeScreenState {
  showRSSModal: boolean;
}

class HomeScreen extends Component<IHomeScreenProps, IHomeScreenState> {

  state: IHomeScreenState = {
    showRSSModal: false
  }

  private menuItemClick = (action: HomeMenuActions, index: number) => {
    const { dispatch } = this.props;
    switch (index) {
      case 0: {

        break;
      }
      case 1: {
        dispatch(deleteAllSources());
        showMessage("Просто взял и все снес ;(")
        break;
      }
    }
  }

  private addRSS = (rssUrl: string) => {
    const { dispatch, sources } = this.props;
    this.setState({ showRSSModal: false });
    if (this.searchRSSinStore(sources, rssUrl)) {
      showMessage("Опять её же? Зачем?")
    } else {
      dispatch(saveSource(rssUrl, () => showMessage("Ура! Лента добавлена!")));
    }
  }

  private searchRSSinStore = (sources: RSSResponse[], rssUrl: string) => (
    sources.map((elem: RSSResponse) => elem.id).includes(rssUrl)
  )

  private onSourceClick = (rssUrl: string, rssTitle: string) => {
    this.props.navigation.navigate("Articles", { rssUrl, rssTitle });
  };

  render() {
    const { showRSSModal } = this.state;
    const { sources, dispatch, isLoaded } = this.props;
    const { addRSS } = this;
    const emptyContentText = "Пока загруженных новостных лент нет, но ты можешь добавить ее, нажав на кнопку внизу экрана.";
    return (
      <Wrapper
        headerTitle="Список лент"
        homeMenuActions={[HomeMenuActions.REFRESH, HomeMenuActions.REMOVE]}
        menuItemClick={this.menuItemClick}
      >
        <Content>
          {
            isLoaded ? (sources && sources.length) ? sources.map((rss: RSSResponse) => (
              <Source
                key={rss.id}
                id={rss.id}
                title={rss.title}
                imageUrl={rss.imageUrl}
                link={rss.link}
                description={rss.description}
                onSourceClick={() => this.onSourceClick(rss.id, rss.title)}
                onDeleteRSS={() => dispatch(deleteSource(rss.title))}
              />
            )) :
              <Card transparent>
                <CardItem style={style.emptyContentText}>
                  <Body>
                    <Text>{emptyContentText}</Text>
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

const mapStateToProps = ({ rssReducer, articlesReducer }: Reducers): IHomeScreenProps => ({
  sources: rssReducer.sources,
  isLoaded: rssReducer.isLoaded,
  articles: articlesReducer.articles,
});

export default connect(mapStateToProps)(HomeScreen);