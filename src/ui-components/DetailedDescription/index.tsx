import React, { Component } from 'react';
import { Thumbnail, Left, Body, Text, Button, Icon, Content, Card, CardItem } from 'native-base';

interface IDetailedDescriptionProps {
    data: string;
}

const DetailedDescription: React.FC<IDetailedDescriptionProps> = ({ data }) => (
    <Content>
        <Card style={{ flex: 0 }}>
            <CardItem>
                <Left>
                    <Thumbnail source={{ uri: 'Image URL' }} />
                    <Body>
                        <Text>{data}</Text>
                        <Text note>April 15, 2016</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>
                    //Your text here
                    </Text>
                </Body>
            </CardItem>
            <CardItem>
                <Left>
                    <Button transparent textStyle={{ color: '#87838B' }}>
                        <Icon name="logo-github" />
                        <Text>1,926 stars</Text>
                    </Button>
                </Left>
            </CardItem>
        </Card>
    </Content>
);

export default DetailedDescription;