import { Link } from 'react-router-dom'
import style from '../css/Principal.module.css'

export const Article = ({ titulo, contenido, ruta, idP }) => { // props para traer todas los propiedades en una sola
  // console.log(idP)
  return (
    <article className={style.entrada}>
      <div className={style.entrada__imagen}>
        <img src={ruta} alt={titulo} />
      </div>
      <div className={style.entrada__contenido}>
        <h4 className='no-margin'>{titulo}</h4>
        <p>{contenido}</p>
        <Link className={`${style.boton} ${style.boton__primario}`} to={`/nosotros/${idP}`}>Leer Entrada</Link>
      </div>
    </article>
  )
}
