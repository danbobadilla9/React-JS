import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

//Actions de Redux
import { crearNuevoProductoAction } from '../actions/productoActions'

const NuevoProducto = () => {

    //State del component
    const [nombre,guardarNombre] = useState('');
    const [precio,guardarPrecio] = useState(0);

    //Utilizar use dispatch y te crea una funcion
    const dispatch = useDispatch();

    //acceder al state del Store

    // const cargando = useSelector( state => state);
    // console.log(cargando ); //permite ver todo el state
    const cargando = useSelector( state => state.productos.loading);
    const error = useSelector( state => state.productos.error);


    //mandar llamar el action de productoAction
    const agregarProducto = producto => dispatch( crearNuevoProductoAction(producto)); //Funcion redux para llamar al action

    

    //Cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();

        //Validar formulario
        if(nombre.trim() === '' || precio <= 0){
            return;
        }

        //si no hay errores

        //Crear el nuevo producto
        agregarProducto({
            nombre,
            precio
        });

    }

    return (
        <div className='row justify-content-center'>

            <div className='col-md-8'>

                <div className='card'>

                    <div className='card-body'>
                        
                        <h2 className='text-center mb-4 font-weight-bold'> Agregar Nuevo Producto</h2>
                        <form onSubmit={submitNuevoProducto}>
                            <div className='form-group'>

                                <label>Nombre Producto</label>
                                <input value={nombre} onChange={ e => guardarNombre(e.target.value)} type="text" className='form-control' placeholder='Nombre Producto' name='nombre'/>

                            </div>

                            <div className='form-group'>

                                <label>Precio Producto</label>
                                <input value={precio} onChange={ e => guardarPrecio(Number(e.target.value))} type="number" className='form-control' placeholder='Precio Producto' name='precio'/>

                            </div>

                            <button type='submit' className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>
                                Agregar
                            </button>

                        </form>

                        { cargando ? <p>Cargando...</p>: null }
                        { error ? <p className='alert alert-danger p2 mt-4 text-center'>Hubo un error</p>: null}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default NuevoProducto