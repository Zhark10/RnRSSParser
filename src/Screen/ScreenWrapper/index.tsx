import React from 'react';
import { Container, Header } from 'native-base';

interface IWrapperProps { }

const Wrapper: React.FC<IWrapperProps> = ({ children, ...otherProps }) => (
    <Container>
        <Header />
        {children}
    </Container>
);

export default Wrapper;