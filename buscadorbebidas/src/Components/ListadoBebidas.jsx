import {Row} from 'react-bootstrap'
import useBebidas from "../Hooks/useBebidas"
import Bebida from './Bebida';
const ListadoBebidas = () => {

    const{ bebidas } = useBebidas();

    return (
            <Row>
                { bebidas.map( bebida => (
                    <Bebida key={bebida.idDrink} bebida={bebida} />
                ))}
            </Row>
        )
}

export default ListadoBebidas