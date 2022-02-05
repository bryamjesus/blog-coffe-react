import { CursosProps } from '../components/CursosProps'
import cursos from '../json/cursos.json'

export const Cursos = () => {
  return (
    <div className='contenedor'>
      <h3 className='centrar-texto'>Nuestros Próximos Cursos y Talleres</h3>
      {
        cursos.map((curso) => (
          <CursosProps key={curso.id} props={curso} />
        ))
      }
    </div>
  )
}
