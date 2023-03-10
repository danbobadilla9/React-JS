import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

import clienteAxios from '../config/axios';

// Crear nuevos productos

export function crearNuevoProductoAction(producto){
    return async (dispatch) => {
        dispatch(agregarProducto());
        try{
            //insertar en la API
            await clienteAxios.post('/productos',producto);
            //Si todo sale bien, actualizar el state
            dispatch( agregarProductoExito(producto) );//es el que ejecuta las funciones
        }catch( error ){
            console.log(error);
            //si hay un error cambiar el state
            dispatch( agregarProductoError(true));
        }
    }
}


const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

//si el producto se guarda en la base de datos 
const agregarProductoExito = producto => ({//Lo que esta en el parentesis es el Action por eso action.type || action.payload 
    type:AGREGAR_PRODUCTO_EXITO, //Describe la aplicacion
    payload: producto //modificara el state
})


//si hubo un error
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado

})
