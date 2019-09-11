import React, { Component } from 'react';
import Wrapper from '../ScreenWrapper/ScreenWrapper';
import DetailedArticle from '../../ui-components/detailed-article/detailed-article';

interface IDetailedArticleScreenProps {
  navigation: any;
}
interface IDetailedArticleScreenState { }

export default class DetailedArticleScreen extends Component<IDetailedArticleScreenProps, IDetailedArticleScreenState> {
  
  private goBack = () => {
    this.props.navigation.navigate("Home")
  };

  render() {
    const { navigation: {state} } = this.props;
    return (
      <Wrapper headerTitle="Список новостей" goBack={this.goBack}>
        <DetailedArticle article={state.params.article} />
      </Wrapper>
    );
  }
}
