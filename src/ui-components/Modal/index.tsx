import React, { Component } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Modal from "react-native-modal";
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

interface IRSSModalProps {
    modalVisible: boolean;
    onHide: () => void;
    addRSS: () => void;
}

class RSSModal extends Component<IRSSModalProps> {
    render() {
        const { modalVisible, onHide, addRSS } = this.props;
        return (
            <View style={{ marginTop: 22 }}>
                <Modal isVisible={modalVisible}>
                    <Container style={{ maxHeight: 250 }}>
                        <Header />
                        <Content >
                            <Form style={{ padding: 8 }}>
                                <Item style={{ width: "80%" }} floatingLabel>
                                    <Label>RSS url</Label>
                                    <Input />
                                </Item>
                                <View style={{ display: "flex", flexWrap: "nowrap", marginTop: 16 }}>
                                    <Button onPress={onHide} transparent>
                                        <Text>Отмена</Text>
                                    </Button>
                                    <Button onPress={addRSS}>
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
}

export default RSSModal;