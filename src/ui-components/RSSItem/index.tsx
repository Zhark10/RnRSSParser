import React, { Component } from 'react';
import { ListItem, Thumbnail, Left, Right, Body, Text } from 'native-base';

interface IRSSItemProps {

    onClick: () => void;
}

const RSSItem: React.FC<IRSSItemProps> = ({ onClick }) => (
    <ListItem avatar>
        <Left>
            <Thumbnail source={{ uri: 'Image URL' }} />
        </Left>
        <Body>
            <Text>Kumar Pratik</Text>
            <Text note>Doing what you like will always keep you happy . .</Text>
        </Body>
        <Right>
            <Text note>3:43 pm</Text>
        </Right>
    </ListItem>
);

export default RSSItem;