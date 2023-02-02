import { Modal, Image} from 'react-bootstrap'
import useBebidas from '../Hooks/useBebidas';
const ModalBebida = () => {
    
    const { modal, handleModalClick,receta,setReceta } = useBebidas();

    const mostrarIngredientes = () => {
        let ingredientes = [];
        for(let i = 1; i < 16;i++){
            if( receta[`strIngredient${i}`]){
                ingredientes.push(
                    <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]} </li>
                )//push no se usa porque modifica la variable original en el state
            }
        }
        return ingredientes;
    }


    return (

        <Modal show ={modal} onHide={() => {
            handleModalClick();
            setReceta({});
        }}>
            <Image src={receta.strDrinkThumb} alt={`Imagen receta ${receta.strDrink}`}/>
            <Modal.Header>
                <Modal.Title>{receta.strDrink}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='p-3'>
                    <h2>Instrucciones</h2>
                    {receta.strInstructions}
                    <h2>Ingredientes</h2>
                    {mostrarIngredientes()}
                </div>
            </Modal.Body>

        </Modal>

        )
}

export default ModalBebida