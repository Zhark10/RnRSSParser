import React, { Component, createRef } from 'react';
import { View } from 'react-native';
import Modal from "react-native-modal";
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Title, Body, Right } from 'native-base';

interface IRSSModalProps {
    modalVisible: boolean;
    onHide: () => void;
    addRSS: (rssUrl: string) => void;
}

interface IRSSModalState {
    inputText: string;
}

class RSSModal extends Component<IRSSModalProps, IRSSModalState> {
    private inputField: any = createRef();

    state: IRSSModalState = {
        inputText: "https://habrahabr.ru/rss/interesting/"
    }

    render() {
        const { modalVisible, onHide, addRSS } = this.props;
        const { inputText } = this.state;
        const { handleChange } = this;
        return (
            <View style={{ marginTop: 22 }}>
                <Modal isVisible={modalVisible}>
                    <Container style={{ maxHeight: 250 }}>
                        <Header style={{paddingLeft: 8}}>
                            <Body>
                                <Title>Добавить адрес</Title>
                            </Body>
                        </Header>
                        <Content >
                            <Form style={{ padding: 8 }}>
                                <Item style={{ width: "80%" }} floatingLabel>
                                    <Label>RSS url</Label>
                                    <Input
                                        onChange={handleChange}
                                        getRef={ref => this.inputField = ref}
                                        onSubmitEditing={this.handleChange} 
                                        value={inputText} />
                                </Item>
                                <View style={{ display: "flex", flexWrap: "nowrap", marginTop: 16 }}>
                                    <Button onPress={onHide} transparent>
                                        <Text>Отмена</Text>
                                    </Button>
                                    <Button onPress={() => addRSS(inputText)}>
                                        <Text>Добавить</Text>
                                    </Button>
                                </View>
                            </Form>
                        </Content>
                    </Container>
                </Modal>
            </View>
        );
    }

    private handleChange = (event: any) => {
        this.setState({ inputText: event.target.value });
    }
}

export default RSSModal;