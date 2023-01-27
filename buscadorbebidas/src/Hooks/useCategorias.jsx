import {useContext} from 'react';
import CategoriasContext from '../Context/CategoriasProvider';

const useCategorias = () => {
    return useContext(CategoriasContext)
}
export default useCategorias;