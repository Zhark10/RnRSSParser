import React, { Component } from 'react';
import { ListItem, Thumbnail, Left, Right, Body, Text } from 'native-base';

interface IRSSItemProps {
    title: string;
    imageUrl: string;
    author: string;
    description: string;

    onClick: () => void;
}

const RSSItem: React.FC<IRSSItemProps> = ({ onClick, title, imageUrl, description, author }) => (
    <ListItem onPress={onClick} avatar>
        <Left>
            <Thumbnail source={{ uri: imageUrl }} />
        </Left>
        <Body>
            <Text>{title}</Text>
            <Text note>{description}</Text>
        </Body>
        <Right>
            <Text note>{author}</Text>
        </Right>
    </ListItem>
);

export default RSSItem;