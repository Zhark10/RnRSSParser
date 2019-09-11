import React, { Component, createRef } from 'react';
import { View, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { Header, Button, Text, Title, Body, Right, Left } from 'native-base';
import style from './style';

interface IRSSModalProps {
    modalVisible: boolean;
    onHide: () => void;
    addRSS: (rssUrl: string) => void;
}

interface IRSSModalState {
    inputText: string;
}

class RSSModal extends Component<IRSSModalProps, IRSSModalState> {
    inputField: any = createRef();

    state: IRSSModalState = {
        inputText: "https://habrahabr.ru/rss/interesting/"
    }

    render() {
        const { modalVisible, onHide, addRSS } = this.props;
        const { inputText } = this.state;
        return (
            <View style={style.modal}>
                <Modal isVisible={modalVisible}>
                    <View style={style.modalBody}>
                        <Header >
                            <Body>
                                <Title style={style.headerTitle}>Добавить адрес</Title>
                            </Body>
                        </Header>
                        <View style={style.modalContent} >
                            <TextInput
                                placeholder={"Добавить RSS"}
                                style={style.textInput}
                                ref={(el) => { this.inputField = el; }}
                                onChangeText={(inputText: string) => this.setState({ inputText })}
                                value={inputText}
                            />
                            <View style={style.buttonGroup}>
                                <Left>
                                    <Button onPress={onHide} transparent>
                                        <Text>Отмена</Text>
                                    </Button>
                                </Left>
                                <Right>
                                    <Button onPress={() => addRSS(inputText)}>
                                        <Text>Добавить</Text>
                                    </Button>
                                </Right>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

export default RSSModal;