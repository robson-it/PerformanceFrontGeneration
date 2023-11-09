import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'

import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className='min-h-[80vh]'>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/cadastro" element={<Cadastro />} /> */}
          {/* <Route path="/temas" element={<ListaTemas />} /> */}
          {/* <Route path="/cadastroTema" element={<FormularioTema />} /> */}
          {/* <Route path="/editarTema/:id" element={<FormularioTema />} /> */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
