import React from 'react';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Subtitle, Content } from 'native-base';
import { NavigationActions } from 'react-navigation';

interface IWrapperProps {
    navigation?: any;
    headerTitle: string;
}

const Wrapper: React.FC<IWrapperProps> = ({ children, navigation, headerTitle }) => (
    <Container>
        <Header>
            <Left>
                {navigation && <Button onPress={() => this.props.navigation.goBack()} transparent>
                    <Icon name='arrow-back' />
                </Button>}
            </Left>
            <Body>
                <Title>Новости</Title>
                <Subtitle>{headerTitle}</Subtitle>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name='menu' />
                </Button>
            </Right>
        </Header>
            {children}
    </Container>
);

export default Wrapper;