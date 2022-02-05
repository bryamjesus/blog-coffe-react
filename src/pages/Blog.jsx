import { BlogProps } from '../components/BlogProps'
import principal from '../json/principal.json'

export const Blog = () => {
  return (
    <div className='contenedor'>
      <h3 className='centrar-texto'>Nuestros Próximos Cursos y Talleres</h3>
      {
       principal.map((p) => <BlogProps key={p.id} props={p} />)
      }
    </div>
  )
}
