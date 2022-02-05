import { Route, Routes } from 'react-router-dom'
import '../css/App.css'
import { Contacto } from '../pages/Contacto'
import { Curso } from '../pages/Curso'
import { CursoDetalle } from '../pages/CursoDetalle'
import { Nosotros } from '../pages/Nosotros'
import { Principal } from '../pages/Principal'
import { Footer } from './Footer'
import { Header } from './Header'
import { Cursos } from '../pages/Cursos'

function App () {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Principal />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/nosotros/:id' element={<Curso />} />
        <Route path='/cursos' element={<Cursos />} />
        <Route path='/cursos/:idC' element={<CursoDetalle />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
