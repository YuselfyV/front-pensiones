import React, { useState } from "react";
import "./registroEmpleador.css";
import axios from 'axios';

function RegistroEmpleador() {
  const [tipoDocumentoEmpleador, setTipoDocumentoEmpleador] = useState('');
  const [identificadorEmpleador, setIdentificadorEmpleador] = useState('');
  const [nombreEmpleador, setNombreEmpleador] = useState('');
  const [telefonoEmpleador, setTelefonoEmpleador] = useState('');
  const [correoEmpleador, setCorreoEmpleador] = useState('');


  <header>
  <title>Formulario Registro Empleador</title>
  <svg aria-label="Pensional">Pensional</svg>
</header>

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/libertadores/empleador', { mode: 'no-cors' }, {

      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tipoDocumentoEmpleador, identificadorEmpleador, nombreEmpleador, telefonoEmpleador, correoEmpleador })
    })
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro Empleador</h2>
      <div>
        <label htmlFor="tipoDocumentoEmpleador">Tipo Documento:</label>
        <input type="text" id="tipoDocumentoEmpleador" value={tipoDocumentoEmpleador} onChange={(e) => setTipoDocumentoEmpleador(e.target.value)} />
      </div>
      <div>
        <label htmlFor="identificadorEmpleador">Numero Identificacion:</label>
        <input type="identificadorEmpleador" id="identificadorEmpleador" value={identificadorEmpleador} onChange={(e) => setIdentificadorEmpleador(e.target.value)} />
      </div>
      <div>
        <label htmlFor="nombreEmpleador">Nombre Empleador:</label>
        <input type="nombreEmpleador" id="nombreEmpleador" value={nombreEmpleador} onChange={(e) => setNombreEmpleador(e.target.value)} />
      </div>
      <div>
        <label htmlFor="telefonoEmpleador">Telefono:</label>
        <input type="telefonoEmpleador" id="telefonoEmpleador" value={telefonoEmpleador} onChange={(e) => setTelefonoEmpleador(e.target.value)} />
      </div>
      <div>
        <label htmlFor="correoEmpleador">Correo:</label>
        <input type="correoEmpleador" id="correoEmpleador" value={correoEmpleador} onChange={(e) => setCorreoEmpleador(e.target.value)} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default RegistroEmpleador;
