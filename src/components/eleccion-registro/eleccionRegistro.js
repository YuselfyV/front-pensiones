import React, { useState } from "react";
import "./eleccionRegistro.css";
import imagen from '../../imagen/empleador.jpg';
import imagen2 from '../../imagen/empleado.png';
import RegistroEmpleador  from "../registro-empleador/registroEmpleador";
import RegistroEmpleado  from "../registro-empleado/registroEmpleado";

function ImagenConFormulario() {
  const[mostrarFormulario, setMostrarFomulario] = useState(false)
  const handleClick =() =>{
    setMostrarFomulario(true);
  }
    return (
      <div>
       <img src={imagen} alt="empleador" onClick={handleClick} />
       {mostrarFormulario && <RegistroEmpleador></RegistroEmpleador>}
       <img src={imagen2} alt="empleado" onClick={handleClick} />
       {mostrarFormulario && <RegistroEmpleado></RegistroEmpleado>}
      </div>

    );
  }
export default ImagenConFormulario;
