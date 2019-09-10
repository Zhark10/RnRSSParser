import React, { FC } from 'react';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Subtitle } from 'native-base';
import PopupMenu from '../../components/menu/popup-menu/popup-menu';
import { MenuActions } from '../../entities/menu';

interface IWrapperProps {
    headerTitle: string;
    goBack?: () => void;
    menuActions?: MenuActions[];
    menuItemClick?: (action: MenuActions, index: number) => any;
}

const Wrapper: FC<IWrapperProps> = ({ children, headerTitle, goBack, menuItemClick, menuActions }) => (
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
                {menuActions && menuItemClick &&
                    <Button transparent>
                        <PopupMenu actions={menuActions} onPress={menuItemClick} />
                    </Button>
                }
            </Right>
        </Header>
        {children}
    </Container>
);

export default Wrapper;