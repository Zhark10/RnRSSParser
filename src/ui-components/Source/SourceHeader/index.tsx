import React, { FC } from 'react';
import { ListItem, Thumbnail, Button, Icon } from 'native-base';
import { Text } from 'react-native';
import { RSSResponse } from '../../../redux/modules/rss/reducer';
import style from './style';

interface ISourceHeaderProps extends RSSResponse {
    onSourceClick: () => void;
    onDeleteRSS: () => void;
}

const SourceHeader: FC<ISourceHeaderProps> = ({ onDeleteRSS, title, imageUrl, onSourceClick }) => (
    <ListItem
        onPress={onSourceClick}
        noIndent
        style={style.listItem}>
        <Thumbnail circular source={imageUrl ? { uri: imageUrl } : require("../../../resource/images/rss.png")} />
        <Text>{title}</Text>
        <Button transparent onPress={onDeleteRSS}>
            <Icon name="trash" />
        </Button>
    </ListItem>
);

export default SourceHeader;