import React, { Component } from 'react';
import Wrapper from '../ScreenWrapper/ScreenWrapper';
import DetailedArticle from '../../ui-components/detailed-article/detailed-article';

interface IDetailedArticleScreenProps {
  navigation: any;
}
interface IDetailedArticleScreenState { }

export default class DetailedArticleScreen extends Component<IDetailedArticleScreenProps, IDetailedArticleScreenState> {
  
  private goBack = () => {
    const { params: { rssUrl, rssTitle } } = this.props.navigation.state;
    this.props.navigation.navigate("Articles", { rssUrl, rssTitle });
  };

  render() {
    const { params: { article } } = this.props.navigation.state;
    return (
      <Wrapper headerTitle={"Новость"} goBack={this.goBack}>
        <DetailedArticle article={article} />
      </Wrapper>
    );
  }
}
