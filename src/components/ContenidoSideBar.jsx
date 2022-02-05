import { Link } from 'react-router-dom'
import style from '../css/Principal.module.css'

export const ContenidoSideBar = ({ title, precio, cupo, idC }) => {
  return (
    <li className={style.widget_curso}>
      <h4 className='no-margin'>{title}</h4>
      <p className={style.widget_curso__label}>
        Precio:
        <span className={style.widget_curso__info}> {precio} </span>
      </p>
      <p className={style.widget_curso__label}>
        Cupo:
        <span className={style.widget_curso__info}> {cupo}</span>
      </p>
      <Link className={`${style.boton} ${style.boton__secundario}`} to={`/cursos/${idC}`}>Más Información sobre nuestros Cursos</Link>
    </li>
  )
}
