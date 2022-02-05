import { useParams } from 'react-router-dom'
import cursos from '../json/cursos.json'
import styleN from '../css/Nosotros.module.css'
import style from '../css/Curso.module.css'

export const CursoDetails = () => {
  const { idC } = useParams()
  // const details = principal.find((curso) => curso.id == id)
  const curso = cursos.find((c) => c.id == idC)
  return (
    <main className='contenedor'>
      <h3 className='centrar-texto'>{curso.title}</h3>
      <div className={styleN.sobre__nosotros}>
        <img src={curso.src} />
        <div>
          <p className={style.curso__label}>
            Precio:
            <span className={style.curso__info}> {curso.price}</span>
          </p>
          <p className={style.curso__label}>
            Cupo:
            <span className={style.curso__info}> {curso.cupo}
            </span>
          </p>
          <p className={style.curso__desciption}>
            {curso.contenido}
          </p>
        </div>
      </div>
    </main>
  )
}
