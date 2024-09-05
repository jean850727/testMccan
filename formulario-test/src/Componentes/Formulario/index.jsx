import React, { useState } from 'react';
import { RegistrarData } from '../../ConexionApi/conexion';


const FormularioRegistro = (props) => {
  const [nombre, setNombre] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");



  const registrar = () => {
    if(document.querySelector("form").checkValidity()){
      RegistrarData(nombre, correoElectronico, telefono, mensaje);
    props.registro(true);
    }else{
      alert("Por favor, complete todos los campos");
    }
    
  }

  const verError = (id, valido) => {
    if (!valido) {
      document.getElementById(id).style.opacity = "1";
    }
    else {
      document.getElementById(id).style.opacity = "0";
    }
  }
  return (
    <form>
      <div className='tituloContainer'>
        <h2>Contáctanos</h2>
      </div>
      <br /><br />
      <div id="name">
        <label>Nombre:</label>
        <input id='name-validity'
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder='Ingresa tu nombre'
          pattern='[A-Za-zÀ-ÿ]+(?: [A-Za-zÀ-ÿ]+)?+(?: [A-Za-zÀ-ÿ]+)?+(?: [A-Za-zÀ-ÿ]+)?'
          minLength={3}
          onBlur={(e) => { verError('error-nombre', e.target.checkValidity()) }}
          required
        />
        <p id='error-nombre'>Ingresa tu nombre completo</p>
      </div>
      <div id="email">
        <label>email:</label>
        <input id='email-validity'
          type="email"
          value={correoElectronico}
          onChange={(e) => setCorreoElectronico(e.target.value)}
          placeholder='email@ejemplo.com'
          onBlur={(e) => { verError('error-email', e.target.checkValidity()) }}
          required
        />
        <p id='error-email'>Ingresa un correo valido</p>
      </div>
      <div id="phone">
        <label >Telefono:</label>
        <input id='phone-validity'
          type="tel"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder='teléfono'
          pattern='[0-9]{10}'
          minLength={10}
          maxLength={10}
          onBlur={(e) => { verError('error-tel', e.target.checkValidity()) }}
          required
        />
        <p id='error-tel'>Ingresa 10 números</p>
      </div>
      <div id='mensaje'>
        <label>Comentarios:</label>
        <textarea id='comentarios-validity'
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder='Ingresa tu comentario'
          minLength={20}
          onBlur={(e) => { verError('error-mensaje', e.target.checkValidity()) }}
          required
        />
        <p id='error-mensaje'>Cuéntame más</p>
      </div>
      
      
      <button type="submit" onClick={(e) => { e.preventDefault(); 
        registrar();
       }}>Registrar</button>
    </form>
  );
};

export default FormularioRegistro;