import React, { memo, useState } from 'react';
import Boton from "./Boton";
import Pantalla from "./Pantalla";

const ContCalc = () => {

  /* variables usestate */

  let [pantalla, setPantalla] = useState('')
  let [result, setResult] = useState('')
  let [memoria, setMemoria] = useState(0)

  /*constantes e y pi */

  const e = Math.E;
  const π = Math.PI;

  /* imprimir en pantalla a la pantalla */

  const printPantalla = (e) => {
    e.preventDefault();
    let number = e.target.innerHTML;
    setPantalla(pantalla += number)
    setResult(result = '')
  }


/*configuración del igual (=)*/
  const equals = () => {{
    /*caso porcentaje*/
    if (pantalla.includes('%')) {
      let porcent1 = pantalla.slice(0, pantalla.indexOf('%'));
      let porcent2 = pantalla.slice(pantalla.indexOf('%') + 1);
      porcent1 = porcent1 / 100;
      setResult(result = eval(porcent1 * porcent2));
      setPantalla(pantalla = '')
    } 
    /*caso x al cuadrado*/
    else if (pantalla.includes('²')){
      const cuadrado = pantalla.replace('²', '**2');
      setResult(result = eval(cuadrado))
      setPantalla(pantalla = '')
    }
    /*caso x al cubo*/
    else if (pantalla.includes('³')){
      const cubo = pantalla.replace('³', '**3');
      setResult(result = eval(cubo))
      setPantalla(pantalla = '')
    }
     /*caso x^*/
     else if (pantalla.includes('^')){
      const exp = pantalla.replace('^', '**');
      setResult(result = eval(exp))
      setPantalla(pantalla = '')
  }
    /*caso raizN*/
    else if (pantalla.includes('ⁿ√')){
        let root = pantalla.slice(pantalla.indexOf("(") +1, pantalla.indexOf("ⁿ√"));
        let baseR = pantalla.slice(pantalla.indexOf("ⁿ√") +2, pantalla.indexOf(')'));
        setResult(result = eval("Math.pow(" + baseR + ", 1/" + root + ")"));
    }
    /*caso raiz cuadrada*/
    else if (pantalla.includes('(√')){
      let cuadrado = pantalla.slice(pantalla.indexOf("(√") +2, pantalla.indexOf(')'))
      setResult(result = Math.sqrt(cuadrado))
  }
   /*caso sin()*/
   else if (pantalla.includes('sin(')){
    let numsin = pantalla.slice(pantalla.indexOf('sin(') + 4, pantalla.indexOf(')'))
    setResult(result = Math.sin(numsin))
    setPantalla(pantalla = '')
  }
   /*caso cos()*/
   else if (pantalla.includes('cos(')){
    let numcos = pantalla.slice(pantalla.indexOf('cos(') + 4, pantalla.indexOf(')'))
    setResult(result = Math.cos(numcos))
    setPantalla(pantalla = '')
  }
   /*caso tan()*/
   else if (pantalla.includes('tan(')){
    let numtan = pantalla.slice(pantalla.indexOf('tan(') + 4, pantalla.indexOf(')'))
    setResult(result = Math.tan(numtan))
    setPantalla(pantalla = '')
  }
    /*caso factorial*/
    else if (pantalla.includes('!')){
      let numero = pantalla.slice(0, pantalla.indexOf('!'))
       if (numero === 0) {
      setResult(result = "1");
    } else if (numero < 0) {
      setResult(result = "undefined");
      setPantalla('')
    } else {
      let number = 1;
      for (var i = numero; i > 0; i--) {
        number *= i;
      }
      setPantalla(pantalla = '');
      setResult(result = number)
    }
  /*resolver pantalla*/
    }
    else{
      try {
        setResult(result = eval(pantalla));
        setPantalla(pantalla = '')
      } catch (error) {
        alert(error);
        clear();
      }
    }
  }
  /*guardar resultado en la memoria*/
setMemoria(memoria=result)
console.log(memoria)}


/* FUNCIONES ESPECÍFICAS BOTONES */

/*funcion x al cuadrado*/
  const square = (e) => {
    if(pantalla[pantalla.length -1] === '²'  || pantalla[pantalla.length -1] === '³' ){
      alert('no se puede viejo')
    }else{
    let number = '²';
    setPantalla(pantalla += number)
    }
  }

/*funcion x al cubo*/
  const cube = (e) => {
    if(pantalla[pantalla.length -1] === '²' || pantalla[pantalla.length -1] === '³'){
      alert('no se puede viejo')
    }else{
    let number = '³';
    setPantalla(pantalla += number)
    }
  }

/* funcion x^ */
const exponent 
= (e) => { 
  setPantalla(pantalla + '^')
  }

/*funcion cambiar signo + / - */
  const plusMinus = (e) => {
    if (pantalla.charAt(0) === "-") {
      setPantalla(pantalla = pantalla.slice(1));
    } else {
      setPantalla(pantalla = "-" + pantalla);
    }
  }


/*funcion boton x!*/
  const factorial = (e)  => {
   setPantalla(pantalla += '!')
  }
  

/*funcion raiz de n*/

const nraiz = (e)  => {
  if (pantalla.length === 0){
    setPantalla(pantalla='')
  }else{
  setPantalla('(' + pantalla + 'ⁿ√')
 }
}

/*funcion raiz cuadrada*/
const raizsquare = (e)  => {
  setPantalla(pantalla += '(√')
}


/* funcion log */
const log = (e) => {
  setPantalla(pantalla += 'log(')
}

/*funcion ln*/
const ln = (e) => {
  setPantalla(pantalla += 'ln(')
}

/*funcion seno*/
const seno = (e) => {
  setPantalla(pantalla += 'sin(')
}

/*funcion coseno*/
const coseno = (e) => {
  setPantalla(pantalla += 'cos(')
}

/*funcion tan*/
const tangente = (e) => {
  setPantalla(pantalla += 'tan(')
}


 /* FUNCIONES BOTON C DEL Y MR */

  /* funcion boton C */
  
  const clear = () => {
    setPantalla(pantalla = '')
    setResult(result = '')
  }

/* funcion boton Del */

  const backspace = () => {
    setPantalla(pantalla = pantalla.substring(0, pantalla.length - 1));
  }

   /* funcion para boton mr */

   let memory = (e) => {
    setPantalla(pantalla+=memoria)
    setResult(result='')
  }

  /* INICIO DOM VIRTUAL */

  return (<>
    <Pantalla calculation={pantalla} result={result} />

    <div id="cont-botones">

      <Boton className="botoncitos borrar" valor="C" funcion={e => clear(e)} />
      <Boton className="botoncitos" valor="π" funcion={e => printPantalla(e)} />
      <Boton className="botoncitos" valor="e" funcion={e => printPantalla(e)} />
      <Boton className="botoncitos" valor="%" funcion={e => printPantalla(e)} />
      <Boton className="botoncitos borrar" valor="Del" funcion={e => backspace(e)} />

      <Boton className="botoncitos" valor="log" funcion={e => log(e)} />
      <Boton className="botoncitos" valor="x³" funcion={e => cube(e)} />
      <Boton className="botoncitos" valor="x!" funcion={e => factorial(e)} />
      <Boton className="botoncitos" valor="ⁿ√" funcion={e => nraiz(e)}/>
      <Boton className="botoncitos basicas" valor="±" funcion={e => plusMinus(e)} />

      <Boton className="botoncitos" valor=" ln" funcion={e => ln(e)} />
      <Boton className="botoncitos" valor="x²" funcion={e => square(e)} />
      <Boton className="botoncitos" valor="x^" funcion={e => exponent(e)} />
      <Boton className="botoncitos" valor="²√" funcion={e => raizsquare(e)}/>
      <Boton className="botoncitos basicas" valor="/" funcion={e => printPantalla(e)} />

      <Boton className="botoncitos" valor="sin" funcion={e => seno(e)} />
      <Boton className="botoncitos numeros" valor="7" funcion={e => printPantalla(e)} />
      <Boton className="botoncitos numeros" valor="8" funcion={e => printPantalla(e)} />
      <Boton className="botoncitos numeros" valor="9" funcion={e => printPantalla(e)} />
      <Boton className="botoncitos basicas" valor="*" funcion={e => printPantalla(e)} />

      <Boton className="botoncitos" valor="cos" funcion={e => coseno(e)}/>
      <Boton className="botoncitos numeros" valor="4" funcion={e => printPantalla(e)} />
      <Boton className="botoncitos numeros" valor="5" funcion={e => printPantalla(e)} />
      <Boton className="botoncitos numeros" valor="6" funcion={e => printPantalla(e)} />
      <Boton className="botoncitos basicas" valor="-" funcion={e => printPantalla(e)} />

      <Boton className="botoncitos" valor="tan" funcion={e => tangente(e)}/>
      <Boton className="botoncitos numeros" valor="1" funcion={e => printPantalla(e)} />
      <Boton className="botoncitos numeros" valor="2" funcion={e => printPantalla(e)} />
      <Boton className="botoncitos numeros" valor="3" funcion={e => printPantalla(e)} />
      <Boton className="botoncitos basicas" valor="+" funcion={e => printPantalla(e)} />

      <Boton className="botoncitos basicas" valor="(" funcion={e => printPantalla(e)} />
      <Boton className="botoncitos basicas" valor=")" funcion={e => printPantalla(e)} />
      <Boton className="botoncitos numeros" valor="0" funcion={e => printPantalla(e)} />
      <Boton className="botoncitos basicas" valor="." funcion={e => printPantalla(e)} />
      <Boton className="botoncitos bEquals" valor="=" funcion={e => equals(e)} />

    </div>
    <button id="mr" onClick={e => memory(e)}>MR</button>
  </>
  );
};


export default ContCalc;
