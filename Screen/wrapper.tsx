import React, { Component } from 'react';
import { Container, Header, Footer } from 'native-base';

interface IWrapperProps { }

const Wrapper: React.FC<IWrapperProps> = ({ children, ...otherProps }) => (
    <Container>
        <Header />
        {children}
        <Footer />
    </Container>
);

export default Wrapper;