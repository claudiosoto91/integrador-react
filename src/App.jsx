import { Route, Routes } from "react-router-dom";


import Nosotros from './routes/Nosotros';
import Contacto from './routes/Contacto';
import Login from './routes/Login';
import Registro from './routes/Registro';

import NavBar from "./components/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer/index';
import Cart from './components/Cart/index';
import { useCartContext } from './context/CartContext';
import Home from './routes/Home';
import Productos from './routes/Productos';
import Footer from './components/Footer/index';

const App = () => {


  const {user} = useCartContext();
    
  if ( user === false ) {
      return <p>Loading...</p>
  }

  return (
    <>
      <NavBar/>
        <Routes>
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/Contacto' element={<Contacto/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/productos/:categoriaId' element={<Productos/>} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/registro' element={<Registro/>} />
        </Routes>
      <Footer />
    </>

  )
}

export default App