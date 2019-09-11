import React, { FC } from 'react';
import { ListItem, Right, Body, Text, Button } from 'native-base';
import { RSSResponse } from '../../../redux/modules/rss/types';
import Collapsible from 'react-native-collapsible'
import { IArticle } from '../../../redux/modules/articles/types';
interface ISourceArticlesProps extends RSSResponse {
    onArticleClick: (article: IArticle) => void;
    isCollapsed?: boolean;
    articles?: IArticle[];
}

const SourceArticles: FC<ISourceArticlesProps> = ({ onArticleClick, isCollapsed, articles }) => (
    <Collapsible collapsed={isCollapsed}>
        {articles.map((article: IArticle, key: number) =>
            <ListItem key={key} thumbnail onPress={() => onArticleClick(article)}>
                <Body>
                    <Text>{article.title}</Text>
                    <Text note numberOfLines={1}>{article.id}</Text>
                </Body>
                <Right>
                    <Button onPress={() => onArticleClick(article)} transparent>
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>
        )}
    </Collapsible>
)


export default SourceArticles;