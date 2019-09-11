import React, { FC } from 'react';
import { ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import { Text } from 'react-native';
import style from './style';
import { RSSResponse } from '../../../redux/modules/rss/types';

interface IRSSProps extends RSSResponse { }

const RSS: FC<IRSSProps> = ({ title, imageUrl }) => (
    <ListItem
        noIndent
        style={style.listItem}>
        <Left>
            <Thumbnail circular source={imageUrl ? { uri: imageUrl } : require("../../../resource/images/rss.png")} />
        </Left>
        <Body>
            <Text>{title}</Text>
        </Body>
        <Right style={style.rightStyle}>
            <Text style={style.rightText}>PLEASE SWIPE</Text>
        </Right>
    </ListItem>
);

export default RSS;