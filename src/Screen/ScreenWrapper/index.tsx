import React from 'react';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Subtitle } from 'native-base';
interface IWrapperProps {
    headerTitle: string;
    goBack?: () => void;
}

const Wrapper: React.FC<IWrapperProps> = ({ children, headerTitle, goBack }) => (
    <Container>
        <Header>
            <Left>
                {goBack && <Button onPress={goBack} transparent>
                    <Icon name="arrow-back" />
                </Button>}
            </Left>
            <Body>
                <Title>Новости</Title>
                <Subtitle>{headerTitle}</Subtitle>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name="menu" />
                </Button>
            </Right>
        </Header>
        {children}
    </Container>
);

export default Wrapper;