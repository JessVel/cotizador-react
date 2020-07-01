import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
import Footer from './components/Footer';

import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 600px;
  margin:0 auto;
`;

const ContenerdorForm = styled.div`
  background-color: #FFF;
  padding: 3rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;


function App() {

  const [ resumen, setResumen ] = useState({
    cotizacion: 0,
    datos:{
      marca:'',
      year:'',
      plan:''
    }
  });

  const [ loading , setLoading ] = useState(false);

  //extraer datos y cotizacion
  const { cotizacion, datos } = resumen;
  
  return (
    <>
    <Contenedor>
        <Header titulo="Cotizador de seguros"
        />
    <ContenerdorForm>
        <Form handleSetResumen={setResumen}
              handleSetLoading={setLoading} 
        />

        { loading ? <Spinner /> : null}

        <Resumen  datos={datos}
        />
        { !loading 
        ?  <Resultado  cotizacion={cotizacion}  /> 
        : null
        }
       
    </ContenerdorForm>
   
    </Contenedor>
    <Footer />
    </>
  );
}

export default App;
