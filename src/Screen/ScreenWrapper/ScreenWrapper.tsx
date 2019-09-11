import React, { FC } from 'react';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Subtitle } from 'native-base';
import PopupMenu from '../../components/menu/popup-menu/popup-menu';
import { HomeMenuActions } from '../../entities/menu';
import style from './style';
interface IWrapperProps {
    headerTitle: string;
    goBack?: () => void;
    onRefresh?: () => void;
    homeMenuActions?: HomeMenuActions[];
    menuItemClick?: (action: HomeMenuActions, index: number) => any;
}

const Wrapper: FC<IWrapperProps> = ({ children, onRefresh, headerTitle, goBack, menuItemClick, homeMenuActions }) => (
    <Container style={style.wrapperContainer}>
        <Header>
            <Left>
                {goBack && <Button onPress={goBack} transparent>
                    <Icon name="arrow-back" />
                </Button>}
            </Left>
            <Body>
                <Title>{headerTitle}</Title>
            </Body>
            <Right>
                {HomeMenuActions && menuItemClick &&
                    <Button transparent>
                        <PopupMenu actions={homeMenuActions} onPress={menuItemClick} />
                    </Button>
                }
            </Right>
        </Header>
        {children}
    </Container>
);

export default Wrapper;