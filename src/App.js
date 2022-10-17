import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../src/Componentes/Navbar";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./Componentes/Contacto";
import ItemDetalleContainer from "./Componentes/ItemDetalleContainer/ItemDetalleContainer";
import CartContainer from "./Componentes/CartContainer/CartContainer.jsx";
import { CartProvider } from "./Context/CartContext";
import Inicio from "./Componentes/Inicio/Inicio";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <div>
            <NavBar />

            <Routes>
              <Route path="/" element={<Inicio/>} />
              <Route path="/productos" element={<ItemListContainer />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/productos/:categoriaId" element={<ItemListContainer />}/>
              <Route path="/item/:productoId" element={<ItemDetalleContainer />}/>
              <Route path="/carrito" element={<CartContainer />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
