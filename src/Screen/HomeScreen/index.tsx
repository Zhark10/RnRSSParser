import * as React from 'react';
import { AsyncStorage, View } from 'react-native';
import Wrapper from '../ScreenWrapper';
import RSSModal from '../../ui-components/Modal';
import ButtonToAdd from '../../ui-components/ButtonToAdd';
import { connect } from 'react-redux';
import { Reducers } from '../../../redux/rootReducer';
import { saveSource, deleteSource, loadDefaultRSSImage } from '../../../redux/rss/action';
import RSSItem from '../../ui-components/RSSItem';
import { AppLoading } from 'expo';
import { RSSResponse } from '../../../redux/rss/reducer';
import { List, Content } from 'native-base';

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
      <Wrapper headerTitle="Новости" >
        <Content>

          {
            isFetching && source && source.length ? source.map((elem: RSSResponse, key: number) => (
              <RSSItem
                key={key}
                id={elem.id}
                title={elem.title}
                imageUrl={elem.imageUrl}
                link={elem.link}
                description={elem.description}
                items={elem.items}
                onDelete={() => dispatch(deleteSource(elem.title))}
                onClick={() => this.seeMore("more")}
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


  private seeMore = (data: string) => {
    this.props.navigation.navigate("Profile", { data });
  };
}

const mapStateToProps = ({ rssReducer }: Reducers): IHomeScreenProps => ({ 
  source: rssReducer && rssReducer.source, 
  isFetching: rssReducer && rssReducer.isFetching 
});
export default connect(mapStateToProps)(HomeScreen);
