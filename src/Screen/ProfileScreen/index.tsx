import * as React from 'react';
import Wrapper from '../ScreenWrapper';
import DetailedArticle from '../../ui-components/DetailedArticle';

interface IProfileScreenProps {
  navigation: any;
}
interface IProfileScreenState { }

export default class ProfileScreen extends React.Component<IProfileScreenProps, IProfileScreenState> {
  
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
