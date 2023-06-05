import React, { useState } from "react";
import "./cosulta.css";
import RegistroEmpleador from "../registro-empleador/registroEmpleador";
import RegistroEmpleado from "../registro-empleado/registroEmpleado";

const Navigation = ({ onSearch }) => {
  const [documentType, setDocumentType] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [route, setRoute] = useState("");

  const handleDocumentTypeChange = (event) => {
    setDocumentType(event.target.value);
  };

  const handleDocumentNumberChange = (event) => {
    setDocumentNumber(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(documentType, documentNumber, route);
  };

  if (route === "home") {
    return <RegistroEmpleador />;
  } else if (route === "about") {
    return <RegistroEmpleado />;
  }

  return (
    <div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="/contacto">Inicio</a>
          </li>
          <li>
            <button onClick={() => setRoute("../registro-empleador/registroEmpleador")}>
              Registro Empleado
            </button>
          </li>
          <li>
            <button onClick={() => setRoute("../registro-empleado/registroEmpleado")}>
              Registro Empleador
            </button>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
        </ul>
      </nav>
      {route === '../registro-empleador/registroEmpleador"' && <RegistroEmpleado />}
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Busqueda Empleado</h1>
        <label>
          Tipo Documento:
          <select value={documentType} onChange={handleDocumentTypeChange}>
            <option value="cedula">Cedula de Ciudadania</option>
            <option value="Pasaporte">Pasaporte</option>
            <option value="Carnet">Carnet</option>
          </select>
        </label>
        <br />
        <label>
          Numero Documento:
          <input
            type="text"
            value={documentNumber}
            onChange={(event) => setDocumentNumber(event.target.value)}
          />
        </label>
        <br />
        <button type="submit" onclick="redirectToPage()">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Navigation;
