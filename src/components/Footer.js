import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 35px;
    text-align: center;
    background-color: black;
`;

const Texto = styled.p`
    color: #eee;
`;

const Footer = () => {
    return ( 
        <Contenedor>
        <Texto>Developed with ♥ by Jesica Velazquez</Texto>
        </Contenedor>
     );
}
 
export default Footer;