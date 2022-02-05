import style from '../css/Contacto.module.css'

const Input = ({ props }) => {
  if (props.html === 'input') {
    return <input className={style.campo__field} type={props.type} placeholder={props.placeholder} id={props.nombre} />
  } else {
    return <textarea className={`${style.campo__field} ${style.campo__field__textarea}`} id={props.nombre} />
  }
}

export const ContactoForm = ({ props }) => {
  return (
    <div className={style.campo}>
      <label className={style.campo__label} htmlFor={props.id}>{props.nombre}</label>
      <Input props={props} />
    </div>
  )
}
