import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const TextoHeader = styled.h1`
  font-size: 2rem;
  margin:0;
  font-family: 'Slabo 27px', serif;
  text-align:center;  
`;

const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
     );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header;