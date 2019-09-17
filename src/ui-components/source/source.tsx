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

class Source extends Component<ISourceProps>  {

    private openSource = (id: string) => {
        const { onSourceClick } = this.props;
        onSourceClick(id);
    }

    private renderSwipeButtons = (id: string): { [key: string]: any }[] => (
        [{
            component: (
                <Button style={{ ...style.swipeStyle, ...style.removeButton }}
                    onPress={() => this.openSource(id)}>
                    <Icon name="open" />
                </Button>
            )
        },
        {
            component: (
                <Button style={{ ...style.swipeStyle, ...style.openButton }}
                    onPress={this.props.onDeleteRSS}>
                    <Icon name="trash" />
                </Button>
            )
        }]
    )

    render() {
        const { title, imageUrl, id, onSourceClick } = this.props;
        return (
            <Swipeout right={this.renderSwipeButtons(id)}>
                <RSS title={title} id={id} imageUrl={imageUrl} onSourceClick={onSourceClick}/>
            </Swipeout>
        )
    }
};

export default Source;