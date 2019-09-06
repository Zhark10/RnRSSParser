import React, { Component } from 'react';
import { Modal, Text, View, Alert } from 'react-native';
import styled from 'styled-components/native';

const MainModal = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: red;
  margin: 20px;
 `;

interface IRSSModalProps {
    modalVisible: boolean;
}

class RSSModal extends Component<IRSSModalProps> {
    render() {
        const { modalVisible } = this.props;
        return (
            <View style={{ marginTop: 22 }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <MainModal>
                        <View style={{ marginTop: 22 }}>
                            <View>
                                <Text>sdsfdsfdsf</Text>
                            </View>
                        </View>
                    </MainModal>
                </Modal>
            </View>
        );
    }
}

export default RSSModal;