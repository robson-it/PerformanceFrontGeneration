import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'

import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import ListaCategorias from './Components/Categorias/ListaCategorias/ListaCategorias';
import FormularioCategoria from './Components/Categorias/FormularioCategorias/FormularioCategoria';
import DeletarCategoria from './Components/Categorias/DeletarCategoria/DeletarCategoria';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className='min-h-[80vh]'>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/cadastroCategorias" element={<FormularioCategoria />} />
          <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
