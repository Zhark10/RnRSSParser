import * as React from 'react';
import Wrapper from '../ScreenWrapper';
import RSSModal from '../../ui-components/Modal';
import ButtonToAdd from '../../ui-components/ButtonToAdd';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import { Content } from 'native-base';
import { RSSResponse, RSSResponceItem } from '../../redux/rss/reducer';
import { loadDefaultRSSImage, deleteSource, saveSource } from '../../redux/rss/action';
import { Reducers } from '../../redux/rootReducer';
import Article from '../../ui-components/RSSItem';

interface IHomeScreenProps {
  navigation?: any;
  source?: RSSResponse[];
  dispatch?: Function;
  isFetching: boolean;
}
interface IHomeScreenState {
  showRSSModal: boolean;
}

class HomeScreen extends React.Component<IHomeScreenProps, IHomeScreenState> {

  state: IHomeScreenState = {
    showRSSModal: false
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadDefaultRSSImage("https://cdn.onlinewebfonts.com/svg/thumbnails_60_229696.png"));
  }

  render() {
    const { showRSSModal } = this.state;
    const { source, dispatch, isFetching } = this.props;
    const { addRSS } = this;
    return (
      <Wrapper headerTitle="Список лент" >
        <Content>
          {
            isFetching && source && source.length ? source.map((elem: RSSResponse, key: number) => (
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
            )) : <AppLoading />
          }
        </Content>

        <ButtonToAdd onClick={() => this.setState({ showRSSModal: true })} />
        <RSSModal modalVisible={showRSSModal} onHide={() => this.setState({ showRSSModal: false })} addRSS={addRSS} />
      </Wrapper>
    );
  }

  private addRSS = (rssUrl: string) => {
    const { dispatch, source } = this.props;
    this.setState({ showRSSModal: false });
    if (this.searchRSSinStore(source, rssUrl)) {
      alert("Новость уже добавлена");
    } else {
      dispatch(saveSource(rssUrl));
    }
  }

  private searchRSSinStore = (source: RSSResponse[], rssUrl: string) => {
    return source.map((elem: RSSResponse) => elem.id).includes(rssUrl);
  }


  private seeMore = (article: RSSResponceItem) => {

    this.props.navigation.navigate("Profile", { article });
  };
}

const mapStateToProps = ({ rssReducer }: Reducers): IHomeScreenProps => ({ 
  source: rssReducer && rssReducer.source, 
  isFetching: rssReducer && rssReducer.isFetching 
});
export default connect(mapStateToProps)(HomeScreen);
