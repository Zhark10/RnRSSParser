import React, { Component } from 'react';
import Wrapper from '../ScreenWrapper/ScreenWrapper';
import { connect } from 'react-redux';
import { Content, Spinner, Body, Text, ListItem, Right, Button, View } from 'native-base';
import { Reducers } from '../../redux/store/root-reducer';
import { HomeMenuActions, ArticlesMenuActions } from '../../entities/menu';
import PTRView from 'react-native-pull-to-refresh';
import { Articles, IArticle } from '../../redux/modules/articles/types';
import { refreshSourceArticles } from '../../redux/modules/articles/action';
import { showMessage } from '../../utils/helpers';
import _ from 'lodash';
import style from './style';

interface IArticlesScreenProps {
  navigation?: any;
  articles: Articles;
  dispatch?: Function;
}
interface IArticlesScreenState {
  sortedArticles: Articles
}

class ArticlesScreen extends Component<IArticlesScreenProps, IArticlesScreenState> {

  state: IArticlesScreenState = {
    sortedArticles: null
  }

  componentDidMount() {
    const { articles } = this.props;
    this.setState({ sortedArticles: articles })
  }

  private sortArticlesByDate = (rssUrl: string, articles: Articles) => {
    this.setState(({ sortedArticles }): IArticlesScreenState => {
      const sortedList = sortedArticles;
      sortedList[rssUrl] = _.sortBy(articles[rssUrl], "published");
      return { sortedArticles: sortedList };
    })
  }

  private onArticleClick = (article: IArticle, rssUrl: string, rssTitle: string) => {
    this.props.navigation.navigate("DetailedArticle", { article, rssUrl, rssTitle });
  };

  private menuItemClick = (action: HomeMenuActions, index: number) => {
    const { dispatch, articles } = this.props;
    const { params: { rssUrl } } = this.props.navigation.state;
    switch (index) {
      case 0: return this.sortArticlesByDate(rssUrl, articles)
      case 1: return dispatch(refreshSourceArticles(rssUrl, () => showMessage("Лента обновлена")))
    }
  }

  private goBack = () => this.props.navigation.navigate("Home");

  private onRefresh = (rssUrl: string, dispatch: Function) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        dispatch(refreshSourceArticles(rssUrl, () => showMessage("Лента обновлена")));
      }, 2000)
    });
  }

  render() {
    const { params: { rssTitle, rssUrl } } = this.props.navigation.state;
    const { dispatch } = this.props;
    const { sortedArticles } = this.state;
    return (
      <Wrapper
        goBack={this.goBack}
        headerTitle={rssTitle}
        homeMenuActions={[ArticlesMenuActions.SORT_BY_DATE, ArticlesMenuActions.REFRESH]}
        menuItemClick={this.menuItemClick}>
        <PTRView onRefresh={() => this.onRefresh(rssUrl, dispatch)}>
          <Content>
            {sortedArticles ? sortedArticles[rssUrl].map((article: IArticle) =>
              <ListItem
                key={article.id}
                thumbnail
                onPress={() => this.onArticleClick(article, rssUrl, rssTitle)}>
                <Body>
                  <Text numberOfLines={3}>{article.title}</Text>
                  <Text note numberOfLines={1}>{article.published}</Text>
                </Body>
                <Right >
                  <View >
                    <Button style={style.viewButton}
                      onPress={() => this.onArticleClick(article, rssUrl, rssTitle)}>
                      <Text>View</Text>
                    </Button>
                  </View>
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