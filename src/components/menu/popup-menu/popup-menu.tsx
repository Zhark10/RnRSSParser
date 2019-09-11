import React, {Component} from 'react';
import { View, TouchableOpacity, UIManager, findNodeHandle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';
import { HomeMenuActions } from '../../../entities/menu';

const ICON_SIZE = 24;

interface IPopupMenu {
    actions: string[],
    onPress?: (item: HomeMenuActions, index: number | undefined) => void
}

class PopupMenu extends Component<IPopupMenu> {

    private handleShowPopupError = () => { };

    private handleMenuPress = () => {
        const { actions, onPress } = this.props;

        UIManager.showPopupMenu(
            findNodeHandle(this.refs.menu as any),
            actions,
            this.handleShowPopupError,
            onPress,
        );
    };

    render() {
        return (
            <View>
                {this.props.children}
                <TouchableOpacity onPress={this.handleMenuPress} style={style.listItem}>
                    <Icon
                        name="md-more"
                        size={ICON_SIZE}
                        color='white'
                        ref="menu"
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

export default PopupMenu;