import Portada from './components/Portada';
import './App.css';
import NavBar from './components/NavBar';
import NavEncabezado from './components/NavEncabezado';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <NavEncabezado/>
      <NavBar/>
      <Portada/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/categoria/:cat' element={<ItemListContainer/>} />
        <Route path='/producto/:id' element={<ItemDetailContainer/>} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
