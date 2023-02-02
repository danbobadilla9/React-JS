import { Container } from 'react-bootstrap'
import Formulario from './Components/Formulario'
import ListadoBebidas from './Components/ListadoBebidas'
import { CategoriasProvider } from './Context/CategoriasProvider'
import { BebidasProvider } from './Context/BebidasProvider'
import ModalBebida from './Components/ModalBebida'

function App() {

  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Buscador de Bebidas</h1>
        </header>
        <Container className='mt-5'>
          
          <Formulario />

          <ListadoBebidas/>

          <ModalBebida />

        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App
