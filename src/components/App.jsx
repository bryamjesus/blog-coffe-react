import { Route, Routes } from 'react-router-dom'
import '../css/App.css'
import { Contacto } from '../pages/Contacto'
import { BlogDetails } from '../pages/BlogDetails'
import { CursoDetails } from '../pages/CursoDetails'
import { Nosotros } from '../pages/Nosotros'
import { Principal } from '../pages/Principal'
import { Footer } from './Footer'
import { Header } from './Header'
import { Cursos } from '../pages/Cursos'
import { Blog } from '../pages/Blog'

function App () {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Principal />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogDetails />} />
        <Route path='/cursos' element={<Cursos />} />
        <Route path='/cursos/:idC' element={<CursoDetails />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
