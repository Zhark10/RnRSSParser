import React, { FC } from 'react';
import { Left, Body, Text, Button, Content, Card, CardItem, Thumbnail } from 'native-base';
import style from './style';
import { IArticle } from '../../redux/modules/articles/types';
interface IDetailedArticleProps {
    article: IArticle;
}

const DetailedArticle: FC<IDetailedArticleProps> = ({ article: { author, description, published, title, image } }) => (
    <Content>
        <Card style={style.card}>
            <CardItem>
                <Left>
                    <Thumbnail source={image ? { uri: image } : require("../../resource/images/rss.png")} />
                    <Body>
                        <Text>{title}</Text>
                        <Text note>{published}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>
                        {description.replace(/<[^>]*>/g, '')}
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



export default DetailedArticle;