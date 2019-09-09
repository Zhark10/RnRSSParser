import React, { Component } from 'react';
import { ListItem, Thumbnail, Left, Right, Body, Text, Button, Icon, List } from 'native-base';
import { RSSResponse, RSSResponceItem } from '../../../redux/rss/reducer';

interface IRSSItemProps extends RSSResponse {
    onClick?: () => void;
    onDelete?: () => void;
}

const RSSItem: React.FC<IRSSItemProps> = ({ onClick, onDelete, title, imageUrl, link, items }) => (
    <>
        <List>
            <ListItem noIndent style={{ backgroundColor: "#cde1f9" }}>
                <Left>
                    <Text>{title}</Text>
                </Left>
                <Right>
                    <Button transparent onPress={onDelete}>
                        <Icon name="trash" />
                    </Button>
                </Right>
            </ListItem>
            {items.map((RSSItem: RSSResponceItem, key: number) =>
                <ListItem key={key} thumbnail onPress={onClick}>
                    <Left>
                        {/* <Thumbnail square source={{ uri: imageUrl }} /> */}
                    </Left>
                    <Body>
                        <Text>{RSSItem.title}</Text>
                        <Text note numberOfLines={1}>{RSSItem.description}</Text>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Text>View</Text>
                        </Button>
                    </Right>
                </ListItem>)
            }
        </List>
    </>
);

export default RSSItem;