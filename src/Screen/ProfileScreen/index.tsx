import * as React from 'react';
import Wrapper from '../ScreenWrapper';
import DetailedDescription from '../../ui-components/DetailedDescription';

interface IProfileScreenProps {
  navigation: any;
  data: string;
}
interface IProfileScreenState { }

export default class ProfileScreen extends React.Component<IProfileScreenProps, IProfileScreenState> {
  render() {
    const { navigation: {state} } = this.props;
    return (
      <Wrapper headerTitle="Список новостей">
        <DetailedDescription data={state.params.data} />
      </Wrapper>
    );
  }

  // private seeMore = (data: string) => {
  //   this.props.navigation.navigate("Profile", data);
  // };


}
