import { Link } from 'react-router-dom'
import style from '../css/Header.module.css'

export const Header = () => {
  return (
    <header className={style.header}>
      <div className='contenedor'>
        <div className={style.barra}>
          <Link className={style.logo} to='/'>
            <h1 className={`${style.logo__nombre} no-margin centrar-texto`}>
              Blog<span className={style.logo__bold}>DeCafé</span>
            </h1>
          </Link>
          <nav className={style.navegacion}>
            <Link className={style.navegacion__enlace} to='/nosotros'>Nosotros</Link>
            <Link className={style.navegacion__enlace} to='/cursos'>Cursos</Link>
            <Link className={style.navegacion__enlace} to='/contacto'>Contacto</Link>
          </nav>
        </div>
      </div>

      <div className={style.header__texto}>
        <h2 className='no-margin'>Blog de café con consejos y cursos</h2>
        <p className='no-margin'>
          Aprende de los expertos con las mejores recetas y consejos
        </p>
      </div>
    </header>
  )
}
