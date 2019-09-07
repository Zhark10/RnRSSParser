import React, { Component } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Modal from "react-native-modal";
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

const MainModal = styled.View`
  margin: 8px;
  padding: 16px;
 `;

const ButtonGroup = styled.View`
  display: flex;
  justify-content: space-between;
  flex-wrap-nowrap;
  max-width: 80%;
 `;

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
                    <MainModal>
                        <Container>
                            <Header />
                            <Content>
                                <Form style={{ padding: 8 }}>
                                    <Item style={{ width: "80%" }} floatingLabel>
                                        <Label>RSS url</Label>
                                        <Input />
                                    </Item>
                                </Form>
                                <ButtonGroup>
                                    <Button transparent primary onPress={onHide}>
                                        <Text>Отмена</Text>
                                    </Button>
                                    <Button onPress={addRSS}>
                                        <Text>Добавить</Text>
                                    </Button>
                                </ButtonGroup>
                            </Content>
                        </Container>
                    </MainModal>
                </Modal>
            </View>
        );
    }
}

export default RSSModal;