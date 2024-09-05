import FormularioRegistro from './Componentes/Formulario';
import './App.css'
import { useState } from 'react';

function App() {
  const [registro, setRegistro] = useState(false);
  const registroExitoso = (valor) => {
    setRegistro(valor);
    console.log(valor);


  }
  return (
    <>
      {!registro && <FormularioRegistro registro={setRegistro} />}
      {registro && <div id='container-registro-exitoso'>
        <img src='/check.gif' />
        
        <p>Registro exitoso</p>
      </div>}

    </>
  )
}

export default App;
