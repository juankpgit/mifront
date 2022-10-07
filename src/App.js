import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './components/Inicio'
import Clientes from './components/Clientes'
import Cliente from './components/Cliente'
import Navbar from './components/Navbar'

function App() {
  console.log(window.location.pathname)
  return (
    <div className="contenedor">
      <Navbar>
        
      </Navbar>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Inicio></Inicio>}></Route>
            <Route path='/clientes' element={<Clientes></Clientes>}></Route>
            <Route path='/cliente/:id' element={<Cliente></Cliente>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
