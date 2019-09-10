import React, { Component, createRef } from 'react';
import { View, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { Header, Button, Text, Title, Body, Right, Left } from 'native-base';

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
            <View style={{ marginTop: 22 }}>
                <Modal isVisible={modalVisible}>
                    <View style={{backgroundColor: "#fff"}}>
                        <Header >
                            <Body>
                                <Title style={{ paddingLeft: 8 }}>Добавить адрес</Title>
                            </Body>
                        </Header>
                        <View style={{ padding: 8 }} >
                            <TextInput
                                placeholder={"Добавить RSS"}
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 4, borderRadius: 12 }}
                                ref={(el) => { this.inputField = el; }}
                                onChangeText={(inputText) => this.setState({ inputText })}
                                value={inputText}
                            />
                            <View style={{ marginTop: 16, minWidth: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
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