import React, { FC } from 'react';
import { Left, Body, Text, Button, Content, Card, CardItem, Thumbnail } from 'native-base';
import style from './style';
import { IArticle } from '../../redux/modules/articles/types';
import { Linking } from 'react-native';
import { showMessage } from '../../utils/helpers';
interface IDetailedArticleProps {
    article: IArticle;
}

const DetailedArticle: FC<IDetailedArticleProps> = ({ article: { description, published, title, image, id } }) => (
    <Content padder>
        <Card style={style.card}>
            <CardItem header bordered>
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
    </Content>
);



export default DetailedArticle;