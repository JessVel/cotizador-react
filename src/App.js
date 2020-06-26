import React from 'react';
import Header from './components/Header';
import Form from './components/Formulario';

import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 600px;
  margin:0 auto;
`;

const ContenerdorForm = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;


function App() {
  
  return (
    <Contenedor>
    <Header titulo="Cotizador de seguros"
    />
    <ContenerdorForm>
      <Form />

    </ContenerdorForm>

    </Contenedor>
  );
}

export default App;
