import React from 'react';
import { Left, Body, Text, Button, Content, Card, CardItem } from 'native-base';
import { RSSResponseItem } from '../../redux/modules/rss/reducer';
import style from './style';
interface IDetailedDescriptionProps {
    article: RSSResponseItem;
}

const DetailedDescription: React.FC<IDetailedDescriptionProps> = ({ article: { author, description, published, title } }) => (
    <Content>
        <Card style={style.card}>
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