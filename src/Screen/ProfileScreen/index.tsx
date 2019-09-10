import * as React from 'react';
import Wrapper from '../ScreenWrapper';
import DetailedDescription from '../../ui-components/DetailedDescription';

interface IProfileScreenProps {
  navigation: any;
}
interface IProfileScreenState { }

export default class ProfileScreen extends React.Component<IProfileScreenProps, IProfileScreenState> {
  render() {
    const { navigation: {state} } = this.props;
    return (
      <Wrapper headerTitle="Список новостей" goBack={this.goBack}>
        <DetailedDescription article={state.params.article} />
      </Wrapper>
    );
  }

  private goBack = () => {
    this.props.navigation.navigate("Home")
  };

}
