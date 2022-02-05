import { Link } from 'react-router-dom'
import style from '../css/Curso.module.css'

export const BlogProps = ({ props }) => {
  return (
    <div className={style.curso}>
      <div className={style.curso__img}>
        <Link to={`/blog/${props.id}`}>
          <img src={props.src} alt={props.title} />
        </Link>
      </div>
      <div className={style.curso__informacion}>
        <h4 className='no-margin'>
          <Link className={style.titulo__blog} to={`/blog/${props.id}`}>{props.title}</Link>
        </h4>
        <p className={style.curso__desciption}>
          {props.contenidoUno}
        </p>
      </div>
    </div>
  )
}
