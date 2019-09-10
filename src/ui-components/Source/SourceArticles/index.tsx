import React, { FC } from 'react';
import { ListItem, Right, Body, Text, Button } from 'native-base';
import Collapsible from 'react-native-collapsible'
import { RSSResponseItem, RSSResponse } from '../../../redux/modules/rss/reducer';

interface ISourceArticlesProps extends RSSResponse {
    onArticleClick: (article: RSSResponseItem) => void;
    isCollapsed?: boolean;
    articles?: RSSResponseItem[];
}

const SourceArticles: FC<ISourceArticlesProps> = ({ onArticleClick, isCollapsed, articles }) => (
    <Collapsible collapsed={isCollapsed}>
        {articles.map((article: RSSResponseItem, key: number) =>
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
            </ListItem>)}
    </Collapsible>
)


export default SourceArticles;