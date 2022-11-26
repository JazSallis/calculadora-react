import "./calculadora.css";
import React from 'react';

const Pantalla = (props) => {
  return (
      <div id="contenedor-pantalla">
        <h1>Calculadora Científica</h1>
        <div id="displayBox">
          <input type="text" disabled readOnly id="calculation" value={props.calculation}/>
          <input type="text" disabled readOnly id="result" value={props.result}/>
        </div>
      </div>
    );
  }

  export default Pantalla


