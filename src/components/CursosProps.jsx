import style from '../css/Curso.module.css'

export const CursosProps = ({ props }) => {
  return (
    <div className={style.curso}>
      <div className={style.curso__img}>
        <img src={props.src} alt={props.title} />
      </div>

      <div className={style.curso__informacion}>
        <h4 className='no-margin'>{props.title}</h4>
        <p className={style.curso__label}>
          Precio:
          <span className={style.curso__info}> {props.price}</span>
        </p>
        <p className={style.curso__label}>
          Cupo:
          <span className={style.curso__info}> {props.cupo}
          </span>
        </p>
        <p className={style.curso__desciption}>
          {props.contenido}
        </p>
      </div>
    </div>
  )
}
