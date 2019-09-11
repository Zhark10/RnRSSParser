import React, { Component } from 'react';
import { List } from 'native-base';
import SourceHeader from './source-header/source-header';
import { RSSResponse } from '../../redux/modules/rss/types';

interface ISourceProps extends RSSResponse {
    onDeleteRSS: () => void;
    onSourceClick: (id: string) => void;
}

interface ISourceState {
    isCollapsed: boolean;
}

class Source extends Component<ISourceProps, ISourceState>  {

    state: ISourceState = {
        isCollapsed: true
    }

    private openClosedContent = (id: string) => {
        const { onSourceClick } = this.props;
        this.setState(({ isCollapsed }: ISourceState) => ({ isCollapsed: !isCollapsed }))
        onSourceClick(id);
    }

    render() {
        const { onDeleteRSS, title, imageUrl, id } = this.props;
        return (
            <List>
                <SourceHeader title={title}
                    imageUrl={imageUrl}
                    onSourceClick={() => this.openClosedContent(id)}
                    onDeleteRSS={onDeleteRSS} />
            </List>
        )
    }
};

export default Source;