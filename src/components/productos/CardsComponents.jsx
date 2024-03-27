import ButtonsComponents from "../ButtonsComponents";
import NavBar from '../navbar/NavBar'
import '../App.css'



export default function CardsComponents({}) {
  const character = [
    { color: "peru", texto: "Añadir al carrito", texto1: "Detalles" },
  ];

  return (
    <>

   <NavBar/>


      <div class="container-items">
        <div class="item">
          <figure>
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_905241-MLA48655068857_122021-O.webp"
              alt="producto"
            />
          </figure>
          <div class="info-product">
            <h5>RTX 3060</h5>
            <p class="price">$500</p>
            {/* /* <button class="btn-add-cart">Añadir al carrito</button> */}
            {/* <button>Detalles</button> */}
            <ButtonsComponents
              texto1={character[0].texto1}
              color={character[0].color}
              texto={character[0].texto}
            />
          </div>
        </div>
        <div class="item">
          <figure>
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_615798-MLA28229872967_092018-O.webp"
              alt="producto"
            />
          </figure>
          <div class="info-product">
            <h5>Procesador i7</h5>
            <p class="price">$200</p>
            <ButtonsComponents
              texto1={character[0].texto1}
              color={character[0].color}
              texto={character[0].texto}
            />
          </div>
        </div>
        <div class="item">
          <figure>
            <img
              src="https://mexx-img-2019.s3.amazonaws.com/Monitor-Gamer-24-LG-Full-Hd-144Hz-1Ms-Freesync-24GN60R-B_44686_1.jpeg"
              alt="producto"
            />
          </figure>
          <div class="info-product">
            <h5>Monitor 144Hz</h5>
            <p class="price">$150</p>
            <ButtonsComponents
              texto1={character[0].texto1}
              color={character[0].color}
              texto={character[0].texto}
            />
          </div>
        </div>
        <div class="item">
          <figure>
            <img
              src="https://wallnet.com.ar/wp-content/uploads/2022/05/219_23-11-2021-04-11-55-2-g203-blanco.jpg"
              alt="producto"
            />
          </figure>
          <div class="info-product">
            <h5>Mouse Logitech</h5>
            <p class="price">$60</p>
            <ButtonsComponents
              texto1={character[0].texto1}
              color={character[0].color}
              texto={character[0].texto}
            />
          </div>
        </div>
        <div class="item">
          <figure>
            <img
              src="https://www.hp.com/es-es/shop/Html/Merch/Images/c07794364_500x367.jpg"
              alt="producto"
            />
          </figure>
          <div class="info-product">
            <h5>Auriculares HypereX</h5>
            <p class="price">$50</p>
            <ButtonsComponents
              texto1={character[0].texto1}
              color={character[0].color}
              texto={character[0].texto}
            />
          </div>
        </div>
      </div>
    </>
  );
}
