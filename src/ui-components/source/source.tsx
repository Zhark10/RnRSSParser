import React, { Component } from 'react';
import RSS from './source-header/source-header';
import { RSSResponse } from '../../redux/modules/rss/types';
import Swipeout from 'react-native-swipeout';
import { Button, Icon } from 'native-base';
import style from './style';
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

    private renderSwipeButtons = (id: string) => ([
        {
            component: (
                <Button style={{...style.swipeStyle, ...style.removeButton}} onPress={() => this.openClosedContent(id)}>
                    <Icon name="open" />
                </Button>
            )
        },
        {
            component: (
                <Button style={{...style.swipeStyle, ...style.openButton}}  onPress={this.props.onDeleteRSS}>
                    <Icon name="trash"/>
                </Button>
            )
        }
    ])

    render() {
        const { title, imageUrl, id } = this.props;
        return (
            <Swipeout right={this.renderSwipeButtons(id)}>
                <RSS title={title}
                    imageUrl={imageUrl}/>
            </Swipeout>

        )
    }
};

export default Source;