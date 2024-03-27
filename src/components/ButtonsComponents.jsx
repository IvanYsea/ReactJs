import { getProducts } from "../asyncMock";



export default function ButtonsComponents({ texto, color, texto1 }) {
  
  

  const buttonStyle = {
    backgroundColor: color,
  };
  const buttonStyle2 = {
    backgroundColor: color,

   
  }
  const productAdd = () => {
    console.log("producto añadido");
  };


  return (
    <>
    <button style={buttonStyle2}>{texto1}</button>
      <button onClick={productAdd} style={buttonStyle}>
        {texto}
      </button>
    </>
  );
}
