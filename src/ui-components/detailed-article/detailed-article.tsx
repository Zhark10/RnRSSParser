import React, { FC } from 'react';
import { Left, Body, Text, Button, Content, Card, CardItem, Thumbnail } from 'native-base';
import style from './style';
import { IArticle } from '../../redux/modules/articles/types';
import { Linking, Image, Alert } from 'react-native';
import { showMessage, getImageFromDescription } from '../../utils/helpers';
import * as pls from 'psl'

interface IDetailedArticleProps {
    params: any
}

const DetailedArticle: FC<IDetailedArticleProps> = ({ params: { article: { description, published, title, id, links }, rssUrl } }) => {
    const img = getImageFromDescription(description);
    const url = links;

    return (
        <Content padder>
            <Card style={style.card}>
                <CardItem header bordered>
                    <Left>
                        <Thumbnail source={require("../../resource/images/rss.png")} />
                        <Body>
                            <Text>{title}</Text>
                            <Text note>{published}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        {img && <Image source={{ uri: img }} style={style.imageStyle} />}
                        <Text>
                            {description.replace(/<[^>]*>/g, '')}
                        </Text>
                    </Body>
                </CardItem>
                <CardItem footer bordered>
                    <Left>
                        <Button onPress={() => Linking.openURL(id).catch((e: any) => showMessage("Что-то пошло не так, попробуйте еще раз"))}
                            transparent
                            textStyle={{ color: '#87838B' }}>
                            <Text>Открыть в браузере</Text>
                        </Button>
                    </Left>
                </CardItem>
            </Card>
        </Content>)
};



export default DetailedArticle;