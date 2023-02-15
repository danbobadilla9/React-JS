//Cada reducer tiene su propio state
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

const intialState = {
    productos: [],
    error: null,
    loading: false
}

export default function( state = intialState, action) {
    switch( action.type){
        default:
            return state;
    }
}