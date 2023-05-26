import Portada from './components/Portada';
import './App.css';
import NavBar from './components/NavBar';
import NavEncabezado from './components/NavEncabezado';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavEncabezado/>
      <NavBar/>
      <Portada/>
      <ItemListContainer/>
      
    </div>
  );
}

export default App;
