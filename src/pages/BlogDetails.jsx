import { useParams } from 'react-router-dom'
import principal from '../json/principal.json'
import style from '../css/Nosotros.module.css'

export const BlogDetails = () => {
  const { id } = useParams()
  const details = principal.find((curso) => curso.id == id)
  return (
    <main className='contenedor'>
      <h3 className='centrar-texto'>{details.title}</h3>
      <div className={style.sobre__nosotros}>
        <img src={details.src} />
        <div>
          <p>{details.contenidoUno}</p>
          <p>{details.contenidoDos}</p>
          <p>{details.contenidoTres}</p>
        </div>
      </div>
    </main>
  )
}
