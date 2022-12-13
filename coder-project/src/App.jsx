import ItemDetailContainer from './components/items/ItemDetailContainer';
import ItemListContainer from './components/items/ItemListContainer';
import NavBar from './components/nav/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import Footer from './components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={"/"} element={<ItemListContainer/>}/> 
          <Route path={"/categoria/:cat"} element={<ItemListContainer/>}/> 
          <Route path={"/producto/:id"} element={<ItemDetailContainer/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
