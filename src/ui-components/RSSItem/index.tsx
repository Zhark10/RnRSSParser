import React, { Component } from 'react';
import { ListItem, Thumbnail, Left, Right, Body, Text, Button, Icon, List } from 'native-base';
import { RSSResponse, RSSResponceItem } from '../../redux/rss/reducer';

interface IArticleProps extends RSSResponse {
    onArticleClick?: (article: RSSResponceItem) => void;
    onDeleteRSS?: () => void;
}

interface IArticleState {
    isOpen: boolean;
}

class Article extends Component<IArticleProps, IArticleState>  {

    state: IArticleState = {
        isOpen: false
    }

    render() {
        const { onArticleClick: onrticleClick, onDeleteRSS, title, imageUrl, items } = this.props;
        const { isOpen } = this.state;
        return (
            <>
                <List>
                    <ListItem onPress={this.openClosedContent} noIndent style={{ backgroundColor: "#cde1f9" }}>
                        <Left>
                            <Text>{title}</Text>
                        </Left>
                        <Right>
                            <Button transparent onPress={onDeleteRSS}>
                                <Icon name="trash" />
                            </Button>
                        </Right>
                    </ListItem>
                    {isOpen && items.map((article: RSSResponceItem, key: number) =>
                        <ListItem key={key} thumbnail onPress={() => onrticleClick(article)}>
                            {/* <Left>
                                <Thumbnail square source={{ uri: imageUrl }} />
                            </Left> */}
                            <Body>
                                <Text>{article.title}</Text>
                                <Text note numberOfLines={1}>{article.id}</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    )
                    }
                </List>
            </>
        )
    }

    private openClosedContent = () => {
        this.setState(({ isOpen }: IArticleState) => ({ isOpen: !isOpen }))
    }
};

export default Article;