import { ContactoForm } from '../components/ContactoForm'
import style from '../css/Contacto.module.css'
import styleP from '../css/Principal.module.css'

const typeInputs = [
  {
    id: 'nombre',
    nombre: 'Nombre',
    placeholder: 'Tu nombre',
    type: 'text',
    html: 'input'
  },
  {
    id: 'email',
    nombre: 'Nombre',
    placeholder: 'Tu E-mail',
    type: 'email',
    html: 'input'
  },
  {
    id: 'mensaje',
    nombre: 'Mensaje',
    placeholder: '',
    type: '',
    html: 'textarea'
  }
]

export const Contacto = () => {
  return (
    <div className='contenedor'>
      <h3 className='centrar-texto'>Contacto</h3>
      <div className={style.contacto__background}> </div>
      <form className={style.formulario}>
        {
          typeInputs.map((i) =>
            <ContactoForm key={i.id} props={i} />
          )
        }
        <div className={style.campo__boton}>
          <input type='submit' value='Enviar' className={`${styleP.boton} ${styleP.boton__primario} ${style.boton__contacto}`} />
        </div>
      </form>
    </div>
  )
}
