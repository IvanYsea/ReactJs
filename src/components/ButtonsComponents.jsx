export default function ButtonsComponents({ texto, color }) {
  const buttonStyle = {
    backgroundColor: color,
  };
  const productAdd = () => {
    console.log("producto añadido");
  };

  return (
    <>
      <button onClick={productAdd} style={buttonStyle}>
        {texto}
      </button>
    </>
  );
}
