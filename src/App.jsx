import "./App.css";
import CardsComponents from "./components/productos/CardsComponents";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/productos/ItemListContainer";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponents from "./components/home/HomeComponents";
import SingleProduct from "./components/producto/SingleProduct";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<HomeComponents/>} />
    <Route exact path="/productos" element={<CardsComponents />} />
    <Route exact path="/producto/:prodId" element={<SingleProduct />} />
    </Routes>
    </BrowserRouter>
      {/* <header>
        <nav>
         <NavBar />
         </nav>
         <div>
         <CartWidget/>
          </div>
      </header>
      <ItemListContainer greeting="Productos" />
      <CardsComponents /> */}

    </>
  );
}

export default App;
