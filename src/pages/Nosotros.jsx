import style from '../css/Nosotros.module.css'

export const Nosotros = () => {
  return (
    <main className='contenedor'>
      <h3 className='centrar-texto'>Sobre Nosotros</h3>
      <div className={style.sobre__nosotros}>
        <div>
          <img src='../img/nosotros.jpg' />
        </div>
        <div>
          <p>Pellentesque lacus orci, mattis cursus est in, finibus sagittis mi. Sed iaculis elit et porta luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas lacinia est vitae eros posuere, non commodo justo viverra. Sed finibus id elit sit amet egestas. Nullam ac urna odio. Fusce vestibulum venenatis quam in scelerisque. Maecenas ultricies ultricies velit, non suscipit enim. Vivamus massa velit, lobortis fringilla laoreet in, suscipit vitae velit. Etiam at orci euismod magna rhoncus luctus. Curabitur viverra est ut elit gravida rutrum. Nullam eget viverra enim. Quisque vitae varius urna.</p>
          <p>Maecenas commodo erat ac elit elementum, ac eleifend arcu gravida. Donec commodo auctor augue, eget tempor dui fermentum in. Duis non enim vitae metus accumsan vehicula. Pellentesque egestas diam ut ante aliquet, sit amet fringilla odio interdum. In nec odio nec turpis faucibus sagittis. Sed quis tellus nec ante luctus aliquam sit amet vel mauris. Nunc vitae facilisis mauris, posuere tristique arcu. Praesent nisi urna, venenatis non laoreet</p>
        </div>
      </div>
    </main>
  )
}
