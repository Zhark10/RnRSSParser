import React, { Component } from 'react';
import Wrapper from '../ScreenWrapper/ScreenWrapper';
import { connect } from 'react-redux';
import { Content, Spinner, Body, Text, ListItem, Right, Button } from 'native-base';
import { Reducers } from '../../redux/store/rootReducer';
import { RSSResponseItem } from '../../redux/modules/rss/types';
import { HomeMenuActions } from '../../entities/menu';
import PTRView from 'react-native-pull-to-refresh';
import { Articles, IArticle } from '../../redux/modules/articlesReducer/types';
import { refreshSourceArticles } from '../../redux/modules/articlesReducer/action';
import { showMessage } from '../../utils/helpers';

interface IArticlesScreenProps {
  navigation?: any;
  currentSourceId?: string;
  articles: Articles;
  dispatch?: Function;
}
interface IArticlesScreenState { }

class ArticlesScreen extends Component<IArticlesScreenProps, IArticlesScreenState> {

  private onArticleClick = (article: RSSResponseItem) => {
    this.props.navigation.navigate("DetailedArticle", { article });
  };

  private goBack = () => {
    this.props.navigation.navigate("Home");
  };

  private onRefresh = (rssUrl: string, dispatch: Function) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
        dispatch(refreshSourceArticles(rssUrl, ()=> showMessage("Лента обновлена")))
      }, 2000)
    });
  }

  render() {
    const { params: { rssTitle, rssUrl } } = this.props.navigation.state;
    const { articles, dispatch } = this.props;
    return (
      <Wrapper
        goBack={this.goBack}
        headerTitle={rssTitle}
        homeMenuActions={[HomeMenuActions.REFRESH, HomeMenuActions.REMOVE]}
      // menuItemClick={this.menuItemClick}
      >
        <PTRView onRefresh={() => this.onRefresh(rssUrl, dispatch)}>
          <Content>
            {articles ? articles[rssUrl].map((article: IArticle, key: number) =>
              <ListItem key={key} thumbnail onPress={() => this.onArticleClick(article)}>
                <Body>
                  <Text>{article.title}</Text>
                  <Text note numberOfLines={1}>{article.id}</Text>
                </Body>
                <Right>
                  <Button onPress={() => this.onArticleClick(article)} transparent>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>
            ) : <Spinner color="blue" />}
          </Content>
        </PTRView>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ articlesReducer }: Reducers): IArticlesScreenProps => ({
  articles: articlesReducer.articles
});

export default connect(mapStateToProps)(ArticlesScreen);