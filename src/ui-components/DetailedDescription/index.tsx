import React from 'react';
import { Thumbnail, Left, Body, Text, Button, Icon, Content, Card, CardItem } from 'native-base';
import { RSSResponceItem } from '../../redux/rss/reducer';

interface IDetailedDescriptionProps {
    article: RSSResponceItem;
}

const DetailedDescription: React.FC<IDetailedDescriptionProps> = ({ article: {author,link,description,id,published,title} }) => (
    <Content>
        <Card style={{ flex: 0 }}>
            <CardItem>
                <Left>
                    {/* <Thumbnail source={{ uri: require("../../redux/resource/images/rss.png") }} /> */}
                    <Body>
                        <Text>{title}</Text>
                        <Text note>{published}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>
                    {description}
                    </Text>
                </Body>
            </CardItem>
            <CardItem>
                <Left>
                    <Button transparent textStyle={{ color: '#87838B' }}>
                        <Text>{author}</Text>
                    </Button>
                </Left>
            </CardItem>
        </Card>
    </Content>
);

export default DetailedDescription;