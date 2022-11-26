let Boton = ({className, funcion, valor, value}) => {
   
  return (
  <button className={className} onClick={funcion}>{valor}</button>);
  }
  
export default Boton