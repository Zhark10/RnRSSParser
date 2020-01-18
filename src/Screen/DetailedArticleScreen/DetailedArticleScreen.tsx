import React, { FC } from 'react';
import Wrapper from '../ScreenWrapper/ScreenWrapper';
import DetailedArticle from '../../ui-components/detailed-article/detailed-article';

interface IDetailedArticleScreenProps {
  navigation: any;
}

export const DetailedArticleScreen: FC<IDetailedArticleScreenProps> = ({ navigation }) => {
  const { params } = navigation.state;
  
  return (
    <Wrapper headerTitle={"Новость"} goBack={() => navigation.goBack()}>
      <DetailedArticle params={params} />
    </Wrapper>
  )
}