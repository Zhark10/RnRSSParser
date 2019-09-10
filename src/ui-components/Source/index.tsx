import React, { Component } from 'react';
import { List } from 'native-base';
import { RSSResponse, RSSResponseItem } from '../../redux/modules/rss/reducer';
import SourceHeader from './SourceHeader';
import SourceArticles from './SourceArticles';

interface ISourceProps extends RSSResponse {
    onArticleClick?: (article: RSSResponseItem) => void;
    onDeleteRSS?: () => void;
}

interface ISourceState {
    isCollapsed: boolean;
}

class Source extends Component<ISourceProps, ISourceState>  {

    state: ISourceState = {
        isCollapsed: true
    }

    render() {
        const { onArticleClick, onDeleteRSS, title, imageUrl, items: articles } = this.props;
        const { isCollapsed } = this.state;
        return (
            <List>
                <SourceHeader title={title}
                    imageUrl={imageUrl}
                    onSourceClick={this.openClosedContent}
                    onDeleteRSS={onDeleteRSS} />
                <SourceArticles articles={articles}
                    isCollapsed={isCollapsed}
                    onArticleClick={onArticleClick} />
            </List>
        )
    }

    private openClosedContent = () => {
        this.setState(({ isCollapsed }: ISourceState) => ({ isCollapsed: !isCollapsed }))
    }
};

export default Source;