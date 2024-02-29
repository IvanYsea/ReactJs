import "./App.css";
import CardsComponents from "./components/CardsComponents";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <header>
        <nav>
         <NavBar />
         </nav>
         <div>
         <CartWidget/>
          </div>
      </header>
      <ItemListContainer greeting="Productos" />
      <CardsComponents />

    </>
  );
}

export default App;
