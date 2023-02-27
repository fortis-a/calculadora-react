import React from "react"
import "../styleSheet/Boton.css"

const Boton = (props) => {
  
  const esOperador = valor =>{
    return isNaN(valor) && (valor !== ".") && (valor !== "=");  
  };
  
  if(esOperador(props.children)){
    return (
      <div 
        className = {"boton-contenedor operador"}
        onClick = { () => props.manejarClick(props.children)}>
        {props.children}
      </div>
    )
  } else {
    return (
      <div 
        className = {"boton-contenedor"}
        onClick = { () => props.manejarClick(props.children)}>
        {props.children}
      </div>
    )
  }
}

export default Boton