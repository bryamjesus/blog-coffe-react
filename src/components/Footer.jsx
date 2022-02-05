import { Link } from 'react-router-dom'
import style from '../css/Header.module.css'
import styleFooter from '../css/Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styleFooter.footer}>
      <div className='contenedor'>
        <div className={style.barra}>
          <Link className={style.logo} to='/'>
            <h1 className={`${style.logo__nombre} no-margin centrar-texto`}>
              Blog<span className='logo__bold'>DeCafé</span>
            </h1>
          </Link>
          <nav className={style.navegacion}>
            <Link className={style.navegacion__enlace} to='/blog'>Blog</Link>
            <Link className={style.navegacion__enlace} to='/nosotros'>Nosotros</Link>
            <Link className={style.navegacion__enlace} to='/cursos'>Cursos</Link>
            <Link className={style.navegacion__enlace} to='/contacto'>Contacto</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
