import { Article } from '../components/Article'
import style from '../css/Principal.module.css'
import principal from '../json/principal.json'
import cursos from '../json/cursos.json'
import { CursoHeader } from '../components/CursoHeader'

export const Principal = () => {
  return (
    <div className={`${style.contenido__principal} contenedor`}>
      <main className={style.blog}>
        <h3>Nuestro blog</h3>
        {
          principal.map((p) => (
            <Article key={p.id} titulo={p.title} contenido={p.contenido} idP={p.id} ruta={p.src} />
          ))
        }
      </main>
      <aside>
        <h3>Nuestros Cursos y Talleres</h3>
        <ul className={`${style.cursos} no-padding`}>
          {
            cursos.map((curso) => (
              <CursoHeader key={curso.id} title={curso.title} precio={curso.price} cupo={curso.cupo} idC={curso.id} />
            ))
          }
        </ul>
      </aside>
    </div>
  )
}
