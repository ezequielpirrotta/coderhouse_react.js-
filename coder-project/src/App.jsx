import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartContextProvider from './components/carts/CartContext';
import ItemDetailContainer from './components/items/ItemDetailContainer';
import ItemListContainer from './components/items/ItemListContainer';
import NavBar from './components/nav/NavBar';
import Cart from './components/carts/Cart';
import Checkout from './components/Checkout';
import Orders from './components/Orders';
import Login from './components/users/Login';
import Profile from './components/users/Profile';

function App() {
  
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>    
          <NavBar/>
          <Routes>
            <Route path={"/"} element={<ItemListContainer/>}/> 
            <Route path={"/categoria/:cat"} element={<ItemListContainer/>}/> 
            <Route path={"/producto/:id"} element={<ItemDetailContainer/>}/> 
            <Route path={"/cart"} element={<Cart/>}/>
            <Route path={"/checkout"} element={<Checkout/>}/>
            <Route path={"/orders"} element={<Orders/>}/> 
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/profile"} element={<Profile/>}/> 
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
